export default {
  name: "opinion",
  type: "document",
  title: "Opinion",
  fields: [
    {
      name: "user_id",
      type: "string",
      title: "User_Id",
    },
    {
      name: "text",
      type: "array",
      title: "Text",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "battle",
      type: "reference",
      title: "Battle",
      to: [{ type: "battle" }],
    },
  ],
};
