// use("First_DB");

// db.getCollection("Sales").insertMany([
//   {
//     item: "abc",
//     price: 10,
//     quantity: 2,
//     date: new Date("2014-03-01T08:00:00Z"),
//   },
//   {
//     item: "jkl",
//     price: 20,
//     quantity: 1,
//     date: new Date("2014-03-01T09:00:00Z"),
//   },
//   {
//     item: "xyz",
//     price: 5,
//     quantity: 10,
//     date: new Date("2014-03-15T09:00:00Z"),
//   },
//   {
//     item: "xyz",
//     price: 5,
//     quantity: 20,
//     date: new Date("2014-04-04T11:21:39.736Z"),
//   },
//   {
//     item: "abc",
//     price: 10,
//     quantity: 10,
//     date: new Date("2014-04-04T21:23:13.331Z"),
//   },
//   {
//     item: "def",
//     price: 7.5,
//     quantity: 5,
//     date: new Date("2015-06-04T05:08:13Z"),
//   },
//   {
//     item: "def",
//     price: 7.5,
//     quantity: 10,
//     date: new Date("2015-09-10T08:43:00Z"),
//   },
//   {
//     item: "abc",
//     price: 10,
//     quantity: 5,
//     date: new Date("2016-02-06T20:20:13Z"),
//   },
// ]);

// Delete Database
// db.dropDatabase();

// Create New Collection
// db.createCollection("NewCollection");
// db.NewCollection.insertOne({
//   name: "Vaibhav",
//   Admin: true,
// });

// Find
// db.getCollection("Sales");
// let a = db.Sales.find({ quantity: 10 });
// console.log(a.toArray());

// Update
// db.Sales.updateMany({ price: 10 }, { $set: { price: 100 } });

// Delete
// db.Sales.deleteOne({ item: "abc" });

// Prctise of Crud Operations
use("practise_Crud");

// db.createCollection("New");
// db.New.insertMany([
//   {
//     item: "xyz",
//     price: 35,
//     quantity: 2,
//     date: {
//       $date: "2022-05-15T14:30:00Z",
//     },
//   },
//   {
//     item: "abc",
//     price: 50,
//     quantity: 5,
//     date: {
//       $date: "2023-01-20T10:00:00Z",
//     },
//   },
//   {
//     item: "def",
//     price: 25,
//     quantity: 3,
//     date: {
//       $date: "2021-07-11T08:45:00Z",
//     },
//   },
//   {
//     item: "ghi",
//     price: 15,
//     quantity: 4,
//     date: {
//       $date: "2020-12-05T11:15:00Z",
//     },
//   },
//   {
//     item: "jkl",
//     price: 40,
//     quantity: 1,
//     date: {
//       $date: "2019-09-25T09:30:00Z",
//     },
//   },
//   {
//     item: "mno",
//     price: 60,
//     quantity: 6,
//     date: {
//       $date: "2018-03-14T13:00:00Z",
//     },
//   },
//   {
//     item: "pqr",
//     price: 45,
//     quantity: 7,
//     date: {
//       $date: "2017-08-22T16:20:00Z",
//     },
//   },
//   {
//     item: "stu",
//     price: 55,
//     quantity: 2,
//     date: {
//       $date: "2016-11-30T18:30:00Z",
//     },
//   },
//   {
//     item: "vwx",
//     price: 30,
//     quantity: 3,
//     date: {
//       $date: "2015-02-10T12:10:00Z",
//     },
//   },
//   {
//     item: "yz",
//     price: 20,
//     quantity: 8,
//     date: {
//       $date: "2014-06-05T07:25:00Z",
//     },
//   },
// ]);

// const a = db.New.find({ price: 20 });
// console.log(a.count());
// console.log(a.toArray());

// db.New.updateMany({ quantity: 2 }, { $set: { quantity: 10 } });

db.New.deleteOne({ price: 50 });
