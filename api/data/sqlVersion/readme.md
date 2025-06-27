# Note

Those two sql files (`create_tables.sql` and `seeding_tables.sql`) are only there for information purposes.
They can be use instead of sequelize sync and seeding but it's not recommended.

Prefere using the sequelize sync and seeding functions with the command below, defined in package.json:

```bash
npm run db:reset
```

or independently:

```bash
npm run db:create
npm run db:seed
```
