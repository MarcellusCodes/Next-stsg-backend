export default {
  name: "vote",
  type: "document",
  title: "Vote",
  fields: [
    {
      name: "user_id",
      type: "string",
      title: "User_Id",
    },
    {
      name: "battle",
      type: "reference",
      title: "Battle",
      to: [{ type: "battle" }],
    },
  ],
};
