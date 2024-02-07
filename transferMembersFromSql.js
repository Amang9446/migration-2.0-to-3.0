const { sourceConnection, destinationConnection } = require("./config");
const tableData = [
  {
    sourceTable: "user",
    sourceColumns: [
      "user_id",
      "email",
      "name",
      "email_verified",
      "create_date",
      "update_date",
    ],
    destinationTable: "members",
    destinationColumns: [
      "MemberUniqueId",
      "Email",
      "Name",
      "IsMailConfirm",
      "RegistDate",
      "LastUpdate",
    ],
  },
];

const createMembers = () => {
  for (const {
    sourceTable,
    sourceColumns,
    destinationTable,
    destinationColumns,
  } of tableData) {
    const selectQuery = `SELECT ${sourceColumns.join(
      ", "
    )} FROM ${sourceTable}`;
    sourceConnection.query(selectQuery, (err, result) => {
      if (err) throw err;

      const insertQuery = `INSERT INTO ${destinationTable} (${destinationColumns.join(
        ", "
      )}) VALUES ?`;
      const values = result.map((row) =>
        sourceColumns.map((column) => row[column])
      );
      destinationConnection.query(insertQuery, [values], (err, result) => {
        if (err) throw err;
        console.log(
          `Data transferred from ${sourceTable} to ${destinationTable}`
        );

        // close the connections
        sourceConnection.end();
        destinationConnection.end();
      });
    });
  }
};

module.exports = createMembers;
