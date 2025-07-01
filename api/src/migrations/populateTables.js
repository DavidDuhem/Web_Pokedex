import bcrypt from "bcrypt";
import {
  Pokemon,
  PokeType,
  Team,
  PokemonTeam,
  Auth,
  Profile,
  sequelize,
} from "../models/index.js";

console.log("🚧 Creating Test Auth & Profile ...");

const hashedPassword = await bcrypt.hash("test", 10);
const auth = await Auth.create({
  email: "david@test.com",
  password: hashedPassword,
});

const profile = await Profile.create({
  username: "David",
  auth_id: auth.id,
});

const auth2 = await Auth.create({
  email: "david2@test.com",
  password: hashedPassword,
});

const profile2 = await Profile.create({
  username: "David2",
  auth_id: auth2.id,
});

console.log("🚧 Adding Pokemons...");

const bulbizarre = await Pokemon.create({
  id: 1,
  name: "Bulbizarre",
  hp: 45,
  atk: 49,
  def: 49,
  atk_spe: 65,
  def_spe: 65,
  speed: 45,
});
const herbizarre = await Pokemon.create({
  id: 2,
  name: "Herbizarre",
  hp: 60,
  atk: 62,
  def: 63,
  atk_spe: 80,
  def_spe: 80,
  speed: 60,
});
const florizarre = await Pokemon.create({
  id: 3,
  name: "Florizarre",
  hp: 80,
  atk: 82,
  def: 83,
  atk_spe: 100,
  def_spe: 100,
  speed: 80,
});
const salameche = await Pokemon.create({
  id: 4,
  name: "Salameche",
  hp: 39,
  atk: 52,
  def: 43,
  atk_spe: 60,
  def_spe: 50,
  speed: 65,
});
const reptincel = await Pokemon.create({
  id: 5,
  name: "Reptincel",
  hp: 58,
  atk: 64,
  def: 58,
  atk_spe: 80,
  def_spe: 65,
  speed: 80,
});
const dracaufeu = await Pokemon.create({
  id: 6,
  name: "Dracaufeu",
  hp: 78,
  atk: 84,
  def: 78,
  atk_spe: 109,
  def_spe: 85,
  speed: 100,
});
const carapuce = await Pokemon.create({
  id: 7,
  name: "Carapuce",
  hp: 44,
  atk: 48,
  def: 65,
  atk_spe: 50,
  def_spe: 64,
  speed: 43,
});
const carabaffe = await Pokemon.create({
  id: 8,
  name: "Carabaffe",
  hp: 59,
  atk: 63,
  def: 80,
  atk_spe: 65,
  def_spe: 80,
  speed: 58,
});
const tortank = await Pokemon.create({
  id: 9,
  name: "Tortank",
  hp: 79,
  atk: 83,
  def: 100,
  atk_spe: 85,
  def_spe: 105,
  speed: 78,
});
const chenipan = await Pokemon.create({
  id: 10,
  name: "Chenipan",
  hp: 45,
  atk: 30,
  def: 35,
  atk_spe: 20,
  def_spe: 20,
  speed: 45,
});
const chrysacier = await Pokemon.create({
  id: 11,
  name: "Chrysacier",
  hp: 50,
  atk: 20,
  def: 55,
  atk_spe: 25,
  def_spe: 25,
  speed: 30,
});
const papilusion = await Pokemon.create({
  id: 12,
  name: "Papilusion",
  hp: 60,
  atk: 45,
  def: 50,
  atk_spe: 80,
  def_spe: 80,
  speed: 70,
});
const aspicot = await Pokemon.create({
  id: 13,
  name: "Aspicot",
  hp: 40,
  atk: 35,
  def: 30,
  atk_spe: 20,
  def_spe: 20,
  speed: 50,
});
const coconfort = await Pokemon.create({
  id: 14,
  name: "Coconfort",
  hp: 45,
  atk: 25,
  def: 50,
  atk_spe: 25,
  def_spe: 25,
  speed: 35,
});
const dardargnan = await Pokemon.create({
  id: 15,
  name: "Dardargnan",
  hp: 65,
  atk: 80,
  def: 40,
  atk_spe: 45,
  def_spe: 80,
  speed: 75,
});
const roucool = await Pokemon.create({
  id: 16,
  name: "Roucool",
  hp: 40,
  atk: 45,
  def: 40,
  atk_spe: 35,
  def_spe: 35,
  speed: 56,
});
const roucoups = await Pokemon.create({
  id: 17,
  name: "Roucoups",
  hp: 63,
  atk: 60,
  def: 55,
  atk_spe: 50,
  def_spe: 50,
  speed: 71,
});
const roucarnage = await Pokemon.create({
  id: 18,
  name: "Roucarnage",
  hp: 83,
  atk: 80,
  def: 75,
  atk_spe: 70,
  def_spe: 70,
  speed: 91,
});
const rattata = await Pokemon.create({
  id: 19,
  name: "Rattata",
  hp: 30,
  atk: 56,
  def: 35,
  atk_spe: 25,
  def_spe: 35,
  speed: 72,
});
const rattatac = await Pokemon.create({
  id: 20,
  name: "Rattatac",
  hp: 55,
  atk: 81,
  def: 60,
  atk_spe: 50,
  def_spe: 70,
  speed: 97,
});
const piafabec = await Pokemon.create({
  id: 21,
  name: "Piafabec",
  hp: 40,
  atk: 60,
  def: 30,
  atk_spe: 31,
  def_spe: 31,
  speed: 70,
});
const rapasdepic = await Pokemon.create({
  id: 22,
  name: "Rapasdepic",
  hp: 65,
  atk: 90,
  def: 65,
  atk_spe: 61,
  def_spe: 61,
  speed: 100,
});
const abo = await Pokemon.create({
  id: 23,
  name: "Abo",
  hp: 35,
  atk: 60,
  def: 44,
  atk_spe: 40,
  def_spe: 54,
  speed: 55,
});
const arbok = await Pokemon.create({
  id: 24,
  name: "Arbok",
  hp: 60,
  atk: 85,
  def: 69,
  atk_spe: 65,
  def_spe: 79,
  speed: 80,
});
const pikachu = await Pokemon.create({
  id: 25,
  name: "Pikachu",
  hp: 35,
  atk: 55,
  def: 30,
  atk_spe: 50,
  def_spe: 40,
  speed: 90,
});
const raichu = await Pokemon.create({
  id: 26,
  name: "Raichu",
  hp: 60,
  atk: 90,
  def: 55,
  atk_spe: 90,
  def_spe: 80,
  speed: 100,
});
const sabelette = await Pokemon.create({
  id: 27,
  name: "Sabelette",
  hp: 50,
  atk: 75,
  def: 85,
  atk_spe: 20,
  def_spe: 30,
  speed: 40,
});
const sablaireau = await Pokemon.create({
  id: 28,
  name: "Sablaireau",
  hp: 75,
  atk: 100,
  def: 110,
  atk_spe: 45,
  def_spe: 55,
  speed: 65,
});
const nidoranF = await Pokemon.create({
  id: 29,
  name: "Nidoran F",
  hp: 55,
  atk: 47,
  def: 52,
  atk_spe: 40,
  def_spe: 40,
  speed: 41,
});
const nidorina = await Pokemon.create({
  id: 30,
  name: "Nidorina",
  hp: 70,
  atk: 62,
  def: 67,
  atk_spe: 55,
  def_spe: 55,
  speed: 56,
});
const nidoqueen = await Pokemon.create({
  id: 31,
  name: "Nidoqueen",
  hp: 90,
  atk: 82,
  def: 87,
  atk_spe: 75,
  def_spe: 85,
  speed: 76,
});
const nidoranM = await Pokemon.create({
  id: 32,
  name: "Nidoran M",
  hp: 46,
  atk: 57,
  def: 40,
  atk_spe: 40,
  def_spe: 40,
  speed: 50,
});
const nidorino = await Pokemon.create({
  id: 33,
  name: "Nidorino",
  hp: 61,
  atk: 72,
  def: 57,
  atk_spe: 55,
  def_spe: 55,
  speed: 65,
});
const nidoking = await Pokemon.create({
  id: 34,
  name: "Nidoking",
  hp: 81,
  atk: 92,
  def: 77,
  atk_spe: 85,
  def_spe: 75,
  speed: 85,
});
const melofee = await Pokemon.create({
  id: 35,
  name: "Melofee",
  hp: 70,
  atk: 45,
  def: 48,
  atk_spe: 60,
  def_spe: 65,
  speed: 35,
});
const melodelfe = await Pokemon.create({
  id: 36,
  name: "Melodelfe",
  hp: 95,
  atk: 70,
  def: 73,
  atk_spe: 85,
  def_spe: 90,
  speed: 60,
});
const goupix = await Pokemon.create({
  id: 37,
  name: "Goupix",
  hp: 38,
  atk: 41,
  def: 40,
  atk_spe: 50,
  def_spe: 65,
  speed: 65,
});
const feunard = await Pokemon.create({
  id: 38,
  name: "Feunard",
  hp: 73,
  atk: 76,
  def: 75,
  atk_spe: 81,
  def_spe: 100,
  speed: 100,
});
const rondoudou = await Pokemon.create({
  id: 39,
  name: "Rondoudou",
  hp: 115,
  atk: 45,
  def: 20,
  atk_spe: 45,
  def_spe: 25,
  speed: 20,
});
const grodoudou = await Pokemon.create({
  id: 40,
  name: "Grodoudou",
  hp: 140,
  atk: 70,
  def: 45,
  atk_spe: 75,
  def_spe: 50,
  speed: 45,
});
const nosferapti = await Pokemon.create({
  id: 41,
  name: "Nosferapti",
  hp: 40,
  atk: 45,
  def: 35,
  atk_spe: 30,
  def_spe: 40,
  speed: 55,
});
const nosferalto = await Pokemon.create({
  id: 42,
  name: "Nosferalto",
  hp: 75,
  atk: 80,
  def: 70,
  atk_spe: 65,
  def_spe: 75,
  speed: 90,
});
const mystherbe = await Pokemon.create({
  id: 43,
  name: "Mystherbe",
  hp: 45,
  atk: 50,
  def: 55,
  atk_spe: 75,
  def_spe: 65,
  speed: 30,
});
const ortide = await Pokemon.create({
  id: 44,
  name: "Ortide",
  hp: 60,
  atk: 65,
  def: 70,
  atk_spe: 85,
  def_spe: 75,
  speed: 40,
});
const rafflesia = await Pokemon.create({
  id: 45,
  name: "Rafflesia",
  hp: 75,
  atk: 80,
  def: 85,
  atk_spe: 100,
  def_spe: 90,
  speed: 50,
});
const paras = await Pokemon.create({
  id: 46,
  name: "Paras",
  hp: 35,
  atk: 70,
  def: 55,
  atk_spe: 45,
  def_spe: 55,
  speed: 25,
});
const parasect = await Pokemon.create({
  id: 47,
  name: "Parasect",
  hp: 60,
  atk: 95,
  def: 80,
  atk_spe: 60,
  def_spe: 80,
  speed: 30,
});
const mimitoss = await Pokemon.create({
  id: 48,
  name: "Mimitoss",
  hp: 60,
  atk: 55,
  def: 50,
  atk_spe: 40,
  def_spe: 55,
  speed: 45,
});
const aeromite = await Pokemon.create({
  id: 49,
  name: "Aeromite",
  hp: 70,
  atk: 65,
  def: 60,
  atk_spe: 90,
  def_spe: 75,
  speed: 90,
});
const taupiqueur = await Pokemon.create({
  id: 50,
  name: "Taupiqueur",
  hp: 10,
  atk: 55,
  def: 25,
  atk_spe: 35,
  def_spe: 45,
  speed: 95,
});
const triopikeur = await Pokemon.create({
  id: 51,
  name: "Triopikeur",
  hp: 35,
  atk: 80,
  def: 50,
  atk_spe: 50,
  def_spe: 70,
  speed: 120,
});
const miaouss = await Pokemon.create({
  id: 52,
  name: "Miaouss",
  hp: 40,
  atk: 45,
  def: 35,
  atk_spe: 40,
  def_spe: 40,
  speed: 90,
});
const persian = await Pokemon.create({
  id: 53,
  name: "Persian",
  hp: 65,
  atk: 70,
  def: 60,
  atk_spe: 65,
  def_spe: 65,
  speed: 115,
});
const psykokwak = await Pokemon.create({
  id: 54,
  name: "Psykokwak",
  hp: 50,
  atk: 52,
  def: 48,
  atk_spe: 65,
  def_spe: 50,
  speed: 55,
});
const akwakwak = await Pokemon.create({
  id: 55,
  name: "Akwakwak",
  hp: 80,
  atk: 82,
  def: 78,
  atk_spe: 95,
  def_spe: 80,
  speed: 85,
});
const ferosinge = await Pokemon.create({
  id: 56,
  name: "Ferosinge",
  hp: 40,
  atk: 80,
  def: 35,
  atk_spe: 35,
  def_spe: 45,
  speed: 70,
});
const colossinge = await Pokemon.create({
  id: 57,
  name: "Colossinge",
  hp: 65,
  atk: 105,
  def: 60,
  atk_spe: 60,
  def_spe: 70,
  speed: 95,
});
const caninos = await Pokemon.create({
  id: 58,
  name: "Caninos",
  hp: 55,
  atk: 70,
  def: 45,
  atk_spe: 70,
  def_spe: 50,
  speed: 60,
});
const arcanin = await Pokemon.create({
  id: 59,
  name: "Arcanin",
  hp: 90,
  atk: 110,
  def: 80,
  atk_spe: 100,
  def_spe: 80,
  speed: 95,
});
const ptitard = await Pokemon.create({
  id: 60,
  name: "Ptitard",
  hp: 40,
  atk: 50,
  def: 40,
  atk_spe: 40,
  def_spe: 40,
  speed: 90,
});
const tetarte = await Pokemon.create({
  id: 61,
  name: "Tetarte",
  hp: 65,
  atk: 65,
  def: 65,
  atk_spe: 50,
  def_spe: 50,
  speed: 90,
});
const tartard = await Pokemon.create({
  id: 62,
  name: "Tartard",
  hp: 90,
  atk: 85,
  def: 95,
  atk_spe: 70,
  def_spe: 90,
  speed: 70,
});
const abra = await Pokemon.create({
  id: 63,
  name: "Abra",
  hp: 25,
  atk: 20,
  def: 15,
  atk_spe: 105,
  def_spe: 55,
  speed: 90,
});
const kadabra = await Pokemon.create({
  id: 64,
  name: "Kadabra",
  hp: 40,
  atk: 35,
  def: 30,
  atk_spe: 120,
  def_spe: 70,
  speed: 105,
});
const alakazam = await Pokemon.create({
  id: 65,
  name: "Alakazam",
  hp: 55,
  atk: 50,
  def: 45,
  atk_spe: 135,
  def_spe: 85,
  speed: 120,
});
const machoc = await Pokemon.create({
  id: 66,
  name: "Machoc",
  hp: 70,
  atk: 80,
  def: 50,
  atk_spe: 35,
  def_spe: 35,
  speed: 35,
});
const machopeur = await Pokemon.create({
  id: 67,
  name: "Machopeur",
  hp: 80,
  atk: 100,
  def: 70,
  atk_spe: 50,
  def_spe: 60,
  speed: 45,
});
const mackogneur = await Pokemon.create({
  id: 68,
  name: "Mackogneur",
  hp: 90,
  atk: 130,
  def: 80,
  atk_spe: 65,
  def_spe: 85,
  speed: 55,
});
const chetiflor = await Pokemon.create({
  id: 69,
  name: "Chetiflor",
  hp: 50,
  atk: 75,
  def: 35,
  atk_spe: 70,
  def_spe: 30,
  speed: 40,
});
const boustiflor = await Pokemon.create({
  id: 70,
  name: "Boustiflor",
  hp: 65,
  atk: 90,
  def: 50,
  atk_spe: 85,
  def_spe: 45,
  speed: 55,
});
const empiflor = await Pokemon.create({
  id: 71,
  name: "Empiflor",
  hp: 80,
  atk: 105,
  def: 65,
  atk_spe: 100,
  def_spe: 60,
  speed: 70,
});
const tentacool = await Pokemon.create({
  id: 72,
  name: "Tentacool",
  hp: 40,
  atk: 40,
  def: 35,
  atk_spe: 50,
  def_spe: 100,
  speed: 70,
});
const tentacruel = await Pokemon.create({
  id: 73,
  name: "Tentacruel",
  hp: 80,
  atk: 70,
  def: 65,
  atk_spe: 80,
  def_spe: 120,
  speed: 100,
});
const racaillou = await Pokemon.create({
  id: 74,
  name: "Racaillou",
  hp: 40,
  atk: 80,
  def: 100,
  atk_spe: 30,
  def_spe: 30,
  speed: 20,
});
const gravalanch = await Pokemon.create({
  id: 75,
  name: "Gravalanch",
  hp: 55,
  atk: 95,
  def: 115,
  atk_spe: 45,
  def_spe: 45,
  speed: 35,
});
const grolem = await Pokemon.create({
  id: 76,
  name: "Grolem",
  hp: 80,
  atk: 110,
  def: 130,
  atk_spe: 55,
  def_spe: 65,
  speed: 45,
});
const ponyta = await Pokemon.create({
  id: 77,
  name: "Ponyta",
  hp: 50,
  atk: 85,
  def: 55,
  atk_spe: 65,
  def_spe: 65,
  speed: 90,
});
const galopa = await Pokemon.create({
  id: 78,
  name: "Galopa",
  hp: 65,
  atk: 100,
  def: 70,
  atk_spe: 80,
  def_spe: 80,
  speed: 105,
});
const ramoloss = await Pokemon.create({
  id: 79,
  name: "Ramoloss",
  hp: 90,
  atk: 65,
  def: 65,
  atk_spe: 40,
  def_spe: 40,
  speed: 15,
});
const flagadoss = await Pokemon.create({
  id: 80,
  name: "Flagadoss",
  hp: 95,
  atk: 75,
  def: 110,
  atk_spe: 100,
  def_spe: 80,
  speed: 30,
});
const magneti = await Pokemon.create({
  id: 81,
  name: "Magneti",
  hp: 25,
  atk: 35,
  def: 70,
  atk_spe: 95,
  def_spe: 55,
  speed: 45,
});
const magneton = await Pokemon.create({
  id: 82,
  name: "Magneton",
  hp: 50,
  atk: 60,
  def: 95,
  atk_spe: 120,
  def_spe: 70,
  speed: 70,
});
const canarticho = await Pokemon.create({
  id: 83,
  name: "Canarticho",
  hp: 52,
  atk: 65,
  def: 55,
  atk_spe: 58,
  def_spe: 62,
  speed: 60,
});
const doduo = await Pokemon.create({
  id: 84,
  name: "Doduo",
  hp: 35,
  atk: 85,
  def: 45,
  atk_spe: 35,
  def_spe: 35,
  speed: 75,
});
const dodrio = await Pokemon.create({
  id: 85,
  name: "Dodrio",
  hp: 60,
  atk: 110,
  def: 70,
  atk_spe: 60,
  def_spe: 60,
  speed: 100,
});
const otaria = await Pokemon.create({
  id: 86,
  name: "Otaria",
  hp: 65,
  atk: 45,
  def: 55,
  atk_spe: 45,
  def_spe: 70,
  speed: 45,
});
const lamantine = await Pokemon.create({
  id: 87,
  name: "Lamantine",
  hp: 90,
  atk: 70,
  def: 80,
  atk_spe: 70,
  def_spe: 95,
  speed: 70,
});
const tadmorv = await Pokemon.create({
  id: 88,
  name: "Tadmorv",
  hp: 80,
  atk: 80,
  def: 50,
  atk_spe: 40,
  def_spe: 50,
  speed: 25,
});
const grotadmorv = await Pokemon.create({
  id: 89,
  name: "Grotadmorv",
  hp: 105,
  atk: 105,
  def: 75,
  atk_spe: 65,
  def_spe: 100,
  speed: 50,
});
const kokiyas = await Pokemon.create({
  id: 90,
  name: "Kokiyas",
  hp: 30,
  atk: 65,
  def: 100,
  atk_spe: 45,
  def_spe: 25,
  speed: 40,
});
const crustabri = await Pokemon.create({
  id: 91,
  name: "Crustabri",
  hp: 50,
  atk: 95,
  def: 180,
  atk_spe: 85,
  def_spe: 45,
  speed: 70,
});
const fantominus = await Pokemon.create({
  id: 92,
  name: "Fantominus",
  hp: 30,
  atk: 35,
  def: 30,
  atk_spe: 100,
  def_spe: 35,
  speed: 80,
});
const spectrum = await Pokemon.create({
  id: 93,
  name: "Spectrum",
  hp: 45,
  atk: 50,
  def: 45,
  atk_spe: 115,
  def_spe: 55,
  speed: 95,
});
const ectoplasma = await Pokemon.create({
  id: 94,
  name: "Ectoplasma",
  hp: 60,
  atk: 65,
  def: 60,
  atk_spe: 130,
  def_spe: 75,
  speed: 110,
});
const onix = await Pokemon.create({
  id: 95,
  name: "Onix",
  hp: 35,
  atk: 45,
  def: 160,
  atk_spe: 30,
  def_spe: 45,
  speed: 70,
});
const soporifik = await Pokemon.create({
  id: 96,
  name: "Soporifik",
  hp: 60,
  atk: 48,
  def: 45,
  atk_spe: 43,
  def_spe: 90,
  speed: 42,
});
const hypnomade = await Pokemon.create({
  id: 97,
  name: "Hypnomade",
  hp: 85,
  atk: 73,
  def: 70,
  atk_spe: 73,
  def_spe: 115,
  speed: 67,
});
const krabby = await Pokemon.create({
  id: 98,
  name: "Krabby",
  hp: 30,
  atk: 105,
  def: 90,
  atk_spe: 25,
  def_spe: 25,
  speed: 50,
});
const krabboss = await Pokemon.create({
  id: 99,
  name: "Krabboss",
  hp: 55,
  atk: 130,
  def: 115,
  atk_spe: 50,
  def_spe: 50,
  speed: 75,
});
const voltorbe = await Pokemon.create({
  id: 100,
  name: "Voltorbe",
  hp: 40,
  atk: 30,
  def: 50,
  atk_spe: 55,
  def_spe: 55,
  speed: 100,
});
const electrode = await Pokemon.create({
  id: 101,
  name: "Electrode",
  hp: 60,
  atk: 50,
  def: 70,
  atk_spe: 80,
  def_spe: 80,
  speed: 140,
});
const noeunoeuf = await Pokemon.create({
  id: 102,
  name: "Noeunoeuf",
  hp: 60,
  atk: 40,
  def: 80,
  atk_spe: 60,
  def_spe: 45,
  speed: 40,
});
const noadkoko = await Pokemon.create({
  id: 103,
  name: "Noadkoko",
  hp: 95,
  atk: 95,
  def: 85,
  atk_spe: 125,
  def_spe: 65,
  speed: 55,
});
const osselait = await Pokemon.create({
  id: 104,
  name: "Osselait",
  hp: 50,
  atk: 50,
  def: 95,
  atk_spe: 40,
  def_spe: 50,
  speed: 35,
});
const ossatueur = await Pokemon.create({
  id: 105,
  name: "Ossatueur",
  hp: 60,
  atk: 80,
  def: 110,
  atk_spe: 50,
  def_spe: 80,
  speed: 45,
});
const kicklee = await Pokemon.create({
  id: 106,
  name: "Kicklee",
  hp: 50,
  atk: 120,
  def: 53,
  atk_spe: 35,
  def_spe: 110,
  speed: 87,
});
const tygnon = await Pokemon.create({
  id: 107,
  name: "Tygnon",
  hp: 50,
  atk: 105,
  def: 79,
  atk_spe: 35,
  def_spe: 110,
  speed: 76,
});
const excelangue = await Pokemon.create({
  id: 108,
  name: "Excelangue",
  hp: 90,
  atk: 55,
  def: 75,
  atk_spe: 60,
  def_spe: 75,
  speed: 30,
});
const smogo = await Pokemon.create({
  id: 109,
  name: "Smogo",
  hp: 40,
  atk: 65,
  def: 95,
  atk_spe: 60,
  def_spe: 45,
  speed: 35,
});
const smogogo = await Pokemon.create({
  id: 110,
  name: "Smogogo",
  hp: 65,
  atk: 90,
  def: 120,
  atk_spe: 85,
  def_spe: 70,
  speed: 60,
});
const rhinocorne = await Pokemon.create({
  id: 111,
  name: "Rhinocorne",
  hp: 80,
  atk: 85,
  def: 95,
  atk_spe: 30,
  def_spe: 30,
  speed: 25,
});
const rhinoferos = await Pokemon.create({
  id: 112,
  name: "Rhinoferos",
  hp: 105,
  atk: 130,
  def: 120,
  atk_spe: 45,
  def_spe: 45,
  speed: 40,
});
const leveinard = await Pokemon.create({
  id: 113,
  name: "Leveinard",
  hp: 250,
  atk: 5,
  def: 5,
  atk_spe: 35,
  def_spe: 105,
  speed: 50,
});
const saquedeneu = await Pokemon.create({
  id: 114,
  name: "Saquedeneu",
  hp: 65,
  atk: 55,
  def: 115,
  atk_spe: 100,
  def_spe: 40,
  speed: 60,
});
const kangourex = await Pokemon.create({
  id: 115,
  name: "Kangourex",
  hp: 105,
  atk: 95,
  def: 80,
  atk_spe: 40,
  def_spe: 80,
  speed: 90,
});
const hypotrempe = await Pokemon.create({
  id: 116,
  name: "Hypotrempe",
  hp: 30,
  atk: 40,
  def: 70,
  atk_spe: 70,
  def_spe: 25,
  speed: 60,
});
const hypocean = await Pokemon.create({
  id: 117,
  name: "Hypocean",
  hp: 55,
  atk: 65,
  def: 95,
  atk_spe: 95,
  def_spe: 45,
  speed: 85,
});
const poissirene = await Pokemon.create({
  id: 118,
  name: "Poissirene",
  hp: 45,
  atk: 67,
  def: 60,
  atk_spe: 35,
  def_spe: 50,
  speed: 63,
});
const poissoroy = await Pokemon.create({
  id: 119,
  name: "Poissoroy",
  hp: 80,
  atk: 92,
  def: 65,
  atk_spe: 65,
  def_spe: 80,
  speed: 68,
});
const stari = await Pokemon.create({
  id: 120,
  name: "Stari",
  hp: 30,
  atk: 45,
  def: 55,
  atk_spe: 70,
  def_spe: 55,
  speed: 85,
});
const staross = await Pokemon.create({
  id: 121,
  name: "Staross",
  hp: 60,
  atk: 75,
  def: 85,
  atk_spe: 100,
  def_spe: 85,
  speed: 115,
});
const mMime = await Pokemon.create({
  id: 122,
  name: "M.Mime",
  hp: 40,
  atk: 45,
  def: 65,
  atk_spe: 100,
  def_spe: 120,
  speed: 90,
});
const insecateur = await Pokemon.create({
  id: 123,
  name: "Insecateur",
  hp: 70,
  atk: 110,
  def: 80,
  atk_spe: 55,
  def_spe: 80,
  speed: 105,
});
const lippoutou = await Pokemon.create({
  id: 124,
  name: "Lippoutou",
  hp: 65,
  atk: 50,
  def: 35,
  atk_spe: 115,
  def_spe: 95,
  speed: 95,
});
const elektek = await Pokemon.create({
  id: 125,
  name: "Elektek",
  hp: 65,
  atk: 83,
  def: 57,
  atk_spe: 95,
  def_spe: 85,
  speed: 105,
});
const magmar = await Pokemon.create({
  id: 126,
  name: "Magmar",
  hp: 65,
  atk: 95,
  def: 57,
  atk_spe: 100,
  def_spe: 85,
  speed: 93,
});
const scarabrute = await Pokemon.create({
  id: 127,
  name: "Scarabrute",
  hp: 65,
  atk: 125,
  def: 100,
  atk_spe: 55,
  def_spe: 70,
  speed: 85,
});
const tauros = await Pokemon.create({
  id: 128,
  name: "Tauros",
  hp: 75,
  atk: 100,
  def: 95,
  atk_spe: 40,
  def_spe: 70,
  speed: 110,
});
const magicarpe = await Pokemon.create({
  id: 129,
  name: "Magicarpe",
  hp: 20,
  atk: 10,
  def: 55,
  atk_spe: 15,
  def_spe: 20,
  speed: 80,
});
const leviator = await Pokemon.create({
  id: 130,
  name: "Leviator",
  hp: 95,
  atk: 125,
  def: 79,
  atk_spe: 60,
  def_spe: 100,
  speed: 81,
});
const lokhlass = await Pokemon.create({
  id: 131,
  name: "Lokhlass",
  hp: 130,
  atk: 85,
  def: 80,
  atk_spe: 85,
  def_spe: 95,
  speed: 60,
});
const metamorph = await Pokemon.create({
  id: 132,
  name: "Metamorph",
  hp: 48,
  atk: 48,
  def: 48,
  atk_spe: 48,
  def_spe: 48,
  speed: 48,
});
const evoli = await Pokemon.create({
  id: 133,
  name: "Evoli",
  hp: 55,
  atk: 55,
  def: 50,
  atk_spe: 45,
  def_spe: 65,
  speed: 55,
});
const aquali = await Pokemon.create({
  id: 134,
  name: "Aquali",
  hp: 130,
  atk: 65,
  def: 60,
  atk_spe: 110,
  def_spe: 95,
  speed: 65,
});
const voltali = await Pokemon.create({
  id: 135,
  name: "Voltali",
  hp: 65,
  atk: 65,
  def: 60,
  atk_spe: 110,
  def_spe: 95,
  speed: 130,
});
const pyroli = await Pokemon.create({
  id: 136,
  name: "Pyroli",
  hp: 65,
  atk: 130,
  def: 60,
  atk_spe: 95,
  def_spe: 110,
  speed: 65,
});
const porygon = await Pokemon.create({
  id: 137,
  name: "Porygon",
  hp: 65,
  atk: 60,
  def: 70,
  atk_spe: 85,
  def_spe: 75,
  speed: 40,
});
const amonita = await Pokemon.create({
  id: 138,
  name: "Amonita",
  hp: 35,
  atk: 40,
  def: 100,
  atk_spe: 90,
  def_spe: 55,
  speed: 35,
});
const amonistar = await Pokemon.create({
  id: 139,
  name: "Amonistar",
  hp: 70,
  atk: 60,
  def: 125,
  atk_spe: 115,
  def_spe: 70,
  speed: 55,
});
const kabuto = await Pokemon.create({
  id: 140,
  name: "Kabuto",
  hp: 30,
  atk: 80,
  def: 90,
  atk_spe: 55,
  def_spe: 45,
  speed: 55,
});
const kabutops = await Pokemon.create({
  id: 141,
  name: "Kabutops",
  hp: 60,
  atk: 115,
  def: 105,
  atk_spe: 65,
  def_spe: 70,
  speed: 80,
});
const ptera = await Pokemon.create({
  id: 142,
  name: "Ptera",
  hp: 80,
  atk: 105,
  def: 65,
  atk_spe: 60,
  def_spe: 75,
  speed: 130,
});
const ronflex = await Pokemon.create({
  id: 143,
  name: "Ronflex",
  hp: 160,
  atk: 110,
  def: 65,
  atk_spe: 65,
  def_spe: 110,
  speed: 30,
});
const artikodin = await Pokemon.create({
  id: 144,
  name: "Artikodin",
  hp: 90,
  atk: 85,
  def: 100,
  atk_spe: 95,
  def_spe: 125,
  speed: 85,
});
const electhor = await Pokemon.create({
  id: 145,
  name: "Electhor",
  hp: 90,
  atk: 90,
  def: 85,
  atk_spe: 125,
  def_spe: 90,
  speed: 100,
});
const sulfura = await Pokemon.create({
  id: 146,
  name: "Sulfura",
  hp: 90,
  atk: 100,
  def: 90,
  atk_spe: 125,
  def_spe: 85,
  speed: 90,
});
const minidraco = await Pokemon.create({
  id: 147,
  name: "Minidraco",
  hp: 41,
  atk: 64,
  def: 45,
  atk_spe: 50,
  def_spe: 50,
  speed: 50,
});
const draco = await Pokemon.create({
  id: 148,
  name: "Draco",
  hp: 61,
  atk: 84,
  def: 65,
  atk_spe: 70,
  def_spe: 70,
  speed: 70,
});
const dracolosse = await Pokemon.create({
  id: 149,
  name: "Dracolosse",
  hp: 91,
  atk: 134,
  def: 95,
  atk_spe: 100,
  def_spe: 100,
  speed: 80,
});
const mewtwo = await Pokemon.create({
  id: 150,
  name: "Mewtwo",
  hp: 106,
  atk: 110,
  def: 90,
  atk_spe: 154,
  def_spe: 90,
  speed: 130,
});
const mew = await Pokemon.create({
  id: 151,
  name: "Mew",
  hp: 100,
  atk: 100,
  def: 100,
  atk_spe: 100,
  def_spe: 100,
  speed: 100,
});

console.log("🚧 Adding Types ...");

const acier = await PokeType.create({ id: 1, name: "Acier", color: "aaaabb" });
const combat = await PokeType.create({
  id: 2,
  name: "Combat",
  color: "bb5544",
});
const dragon = await PokeType.create({
  id: 3,
  name: "Dragon",
  color: "7766ee",
});
const eau = await PokeType.create({ id: 4, name: "Eau", color: "3399ff" });
const electrik = await PokeType.create({
  id: 5,
  name: "Électrik",
  color: "ffbb33",
});
const feu = await PokeType.create({ id: 6, name: "Feu", color: "ff4422" });
const glace = await PokeType.create({ id: 7, name: "Glace", color: "77ddff" });
const insecte = await PokeType.create({
  id: 8,
  name: "Insecte",
  color: "aabb22",
});
const normal = await PokeType.create({
  id: 9,
  name: "Normal",
  color: "bbaabb",
});
const plante = await PokeType.create({
  id: 10,
  name: "Plante",
  color: "77cc55",
});
const poison = await PokeType.create({
  id: 11,
  name: "Poison",
  color: "aa5599",
});
const psy = await PokeType.create({ id: 12, name: "Psy", color: "ff5599" });
const roche = await PokeType.create({ id: 13, name: "Roche", color: "bbaa66" });
const sol = await PokeType.create({ id: 14, name: "Sol", color: "ddbb55" });
const spectre = await PokeType.create({
  id: 15,
  name: "Spectre",
  color: "6666bb",
});
const tenebres = await PokeType.create({
  id: 16,
  name: "Ténèbres",
  color: "665544",
});
const vol = await PokeType.create({ id: 17, name: "Vol", color: "6699ff" });

console.log("🚧 Adding Teams ...");

const ultimateTeam = await Team.create({
  name: "Ultimate Team",
  description: "La meilleure team du monde",
  profile_id: profile.id,
});
const laTeamDeLenfer = await Team.create({
  name: "La Team de l'enfer",
  description: "Le feuuuuu",
  profile_id: profile.id,
});
const squadFofolle = await Team.create({
  name: "Squad fofolle",
  description: "Pour tout gagner",
  profile_id: profile2.id,
});

console.log("🚧 Adding Pokemons to Teams ...");

await bulbizarre.addTypes([plante, poison]);
await herbizarre.addTypes([plante, poison]);
await florizarre.addTypes([plante, poison]);
await salameche.addTypes([feu]);
await reptincel.addTypes([feu]);
await dracaufeu.addTypes([feu, vol]);
await carapuce.addTypes([eau]);
await carabaffe.addTypes([eau]);
await tortank.addTypes([eau]);
await chenipan.addTypes([insecte]);
await chrysacier.addTypes([insecte]);
await papilusion.addTypes([insecte, vol]);
await aspicot.addTypes([insecte, poison]);
await coconfort.addTypes([insecte, poison]);
await dardargnan.addTypes([insecte, poison]);
await roucool.addTypes([normal, vol]);
await roucoups.addTypes([normal, vol]);
await roucarnage.addTypes([normal, vol]);
await rattata.addTypes([normal]);
await rattatac.addTypes([normal]);
await piafabec.addTypes([normal, vol]);
await rapasdepic.addTypes([normal, vol]);
await abo.addTypes([poison]);
await arbok.addTypes([poison]);
await pikachu.addTypes([electrik]);
await raichu.addTypes([electrik]);
await sabelette.addTypes([sol]);
await sablaireau.addTypes([sol]);
await nidoranF.addTypes([poison]);
await nidorina.addTypes([poison]);
await nidoqueen.addTypes([poison, sol]);
await nidoranM.addTypes([poison]);
await nidorino.addTypes([poison]);
await nidoking.addTypes([poison, sol]);
await melofee.addTypes([normal]);
await melodelfe.addTypes([normal]);
await goupix.addTypes([feu]);
await feunard.addTypes([feu]);
await rondoudou.addTypes([normal]);
await grodoudou.addTypes([normal]);
await nosferapti.addTypes([poison, vol]);
await nosferalto.addTypes([poison, vol]);
await mystherbe.addTypes([plante, poison]);
await ortide.addTypes([plante, poison]);
await rafflesia.addTypes([plante, poison]);
await paras.addTypes([insecte, plante]);
await parasect.addTypes([insecte, plante]);
await mimitoss.addTypes([insecte, poison]);
await aeromite.addTypes([insecte, poison]);
await taupiqueur.addTypes([sol]);
await triopikeur.addTypes([sol]);
await miaouss.addTypes([normal]);
await persian.addTypes([normal]);
await psykokwak.addTypes([eau]);
await akwakwak.addTypes([eau]);
await ferosinge.addTypes([combat]);
await colossinge.addTypes([combat]);
await caninos.addTypes([feu]);
await arcanin.addTypes([feu]);
await ptitard.addTypes([eau]);
await tetarte.addTypes([eau]);
await tartard.addTypes([eau, combat]);
await abra.addTypes([psy]);
await kadabra.addTypes([psy]);
await alakazam.addTypes([psy]);
await machoc.addTypes([combat]);
await machopeur.addTypes([combat]);
await mackogneur.addTypes([combat]);
await chetiflor.addTypes([plante, poison]);
await boustiflor.addTypes([plante, poison]);
await empiflor.addTypes([plante, poison]);
await tentacool.addTypes([eau, poison]);
await tentacruel.addTypes([eau, poison]);
await racaillou.addTypes([roche, sol]);
await gravalanch.addTypes([roche, sol]);
await grolem.addTypes([roche, sol]);
await ponyta.addTypes([feu]);
await galopa.addTypes([feu]);
await ramoloss.addTypes([eau, psy]);
await flagadoss.addTypes([eau, psy]);
await magneti.addTypes([electrik, acier]);
await magneton.addTypes([electrik, acier]);
await canarticho.addTypes([normal, vol]);
await doduo.addTypes([normal, vol]);
await dodrio.addTypes([normal, vol]);
await otaria.addTypes([eau]);
await lamantine.addTypes([eau, glace]);
await tadmorv.addTypes([poison]);
await grotadmorv.addTypes([poison]);
await kokiyas.addTypes([eau]);
await crustabri.addTypes([eau, glace]);
await fantominus.addTypes([spectre, poison]);
await spectrum.addTypes([spectre, poison]);
await ectoplasma.addTypes([spectre, poison]);
await onix.addTypes([roche, sol]);
await soporifik.addTypes([psy]);
await hypnomade.addTypes([psy]);
await krabby.addTypes([eau]);
await krabboss.addTypes([eau]);
await voltorbe.addTypes([electrik]);
await electrode.addTypes([electrik]);
await noeunoeuf.addTypes([plante, psy]);
await noadkoko.addTypes([plante, psy]);
await osselait.addTypes([roche]);
await ossatueur.addTypes([roche]);
await kicklee.addTypes([combat]);
await tygnon.addTypes([combat]);
await excelangue.addTypes([normal]);
await smogo.addTypes([poison]);
await smogogo.addTypes([poison]);
await rhinocorne.addTypes([sol, roche]);
await rhinoferos.addTypes([sol, roche]);
await leveinard.addTypes([normal]);
await saquedeneu.addTypes([plante]);
await kangourex.addTypes([normal]);
await hypotrempe.addTypes([eau]);
await hypocean.addTypes([eau]);
await poissirene.addTypes([eau]);
await poissoroy.addTypes([eau]);
await stari.addTypes([eau]);
await staross.addTypes([eau, psy]);
await mMime.addTypes([psy]);
await insecateur.addTypes([insecte, vol]);
await lippoutou.addTypes([glace, psy]);
await elektek.addTypes([electrik]);
await magmar.addTypes([feu]);
await scarabrute.addTypes([insecte]);
await tauros.addTypes([normal]);
await magicarpe.addTypes([eau]);
await leviator.addTypes([eau]);
await lokhlass.addTypes([eau, glace]);
await metamorph.addTypes([normal]);
await evoli.addTypes([normal]);
await aquali.addTypes([eau]);
await voltali.addTypes([electrik]);
await pyroli.addTypes([feu]);
await porygon.addTypes([normal]);
await amonita.addTypes([roche, eau]);
await amonistar.addTypes([roche, eau]);
await kabuto.addTypes([roche, eau]);
await kabutops.addTypes([roche, eau]);
await ptera.addTypes([roche, vol]);
await ronflex.addTypes([normal]);
await artikodin.addTypes([glace, vol]);
await electhor.addTypes([electrik, vol]);
await sulfura.addTypes([feu, vol]);
await minidraco.addTypes([dragon]);
await draco.addTypes([dragon]);
await dracolosse.addTypes([dragon, vol]);
await mewtwo.addTypes([psy]);
await mew.addTypes([psy]);

console.log("🚧 Adding Types to Pokemons ...");

await PokemonTeam.bulkCreate([
  { pokemon_id: 3, team_id: 1 },
  { pokemon_id: 6, team_id: 1 },
  { pokemon_id: 9, team_id: 1 },
  { pokemon_id: 12, team_id: 1 },
  { pokemon_id: 15, team_id: 1 },
  { pokemon_id: 34, team_id: 1 },
  { pokemon_id: 6, team_id: 2 },
  { pokemon_id: 38, team_id: 2 },
  { pokemon_id: 59, team_id: 2 },
  { pokemon_id: 126, team_id: 2 },
  { pokemon_id: 136, team_id: 2 },
  { pokemon_id: 146, team_id: 2 },
  { pokemon_id: 151, team_id: 3 },
  { pokemon_id: 150, team_id: 3 },
  { pokemon_id: 149, team_id: 3 },
  { pokemon_id: 146, team_id: 3 },
  { pokemon_id: 145, team_id: 3 },
  { pokemon_id: 144, team_id: 3 },
]);

console.log("✅ Migration OK ! Closing base ...");
await sequelize.close();
