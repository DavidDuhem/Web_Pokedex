export default class BaseController {
  constructor(model, schema = null) {
    this.model = model;
    this.schema = schema;
  }

  async getAll(req, res) {
    try {
      const items = await this.model.findAll();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await this.model.findByPk(parseInt(req.params.id));
      if (!item) return res.status(404).json({ error: "Not found" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      let value = req.body;

      if (this.schema) {
        const validation = this.schema.validate(req.body);
        if (validation.error) {
          return res
            .status(400)
            .json({ error: validation.error.details[0].message });
        }
        value = validation.value;
      }

      const dataToCreate = { ...value, profile_id: req.user.id };

      const newItem = await this.model.create(dataToCreate);
      res.status(201).json(newItem);
    } catch (err) {
      console.error("Create error:", err);
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const id = parseInt(req.params.id);
      const item = await this.model.findByPk(id);

      if (!item) {
        return res.status(404).json({ error: "Not found" });
      }

      if (this.schema) {
        const updateSchema = this.schema.fork(
          ["name", "description"],
          (field) => field.optional()
        );
        const { error, value } = updateSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
        req.body = value;
      }

      const authorized = await this.verifications(req, res, item);
      if (!authorized) return;

      await item.update(req.body);
      res.json(item);
    } catch (err) {
      console.error("Update error:", err);
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);

      const item = await this.model.findByPk(id);

      if (!item) {
        return res.status(404).json({ error: "Not found" });
      }

      const authorized = await this.verifications(req, res, item);
      if (!authorized) return;

      await item.destroy();
      res.status(204).send();
    } catch (err) {
      console.error("Delete error:", err);
      res.status(500).json({ error: err.message });
    }
  }

  async verifications(req, res, item) {
    return true;
  }
}
