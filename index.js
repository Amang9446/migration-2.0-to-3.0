const createLogbook = require("./transferLogbookFromSql");
const createMembers = require("./transferMembersFromSql");
const insertUsersData = require("./transferMembersFromFirebase");
const insertLogbookData = require("./transferLogbookFromFirebase1");
const insertDiveData = require("./transferDiveDataFromFirebase");
const insertMedia = require("./transferMediaFromFirebase1");
const transferNations = require("./transferNationJsontoSql");

// createMembers();
// createLogbook();
// insertUsersData();
// insertLogbookData();
// insertDiveData();
insertMedia();
// transferNations();
