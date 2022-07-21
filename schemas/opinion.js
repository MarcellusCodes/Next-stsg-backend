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
  ],
};
