import { Colors, Controls } from 'flume';

export const number = {
  type: 'number',
  name: 'number',
  label: 'Number',
  color: Colors.red,
  controls: [
    Controls.number({
      name: 'number',
      label: 'Number',
    }),
  ],
};

export const attribute = {
  type: "attribute",
  name: "attribute",
  label: "attribute",
  color: Colors.orange,
  controls: [
    Controls.select({
      name: "attribute",
      label: "attribute",
      options: [
        {value: "dexterity", label: "dexterity"},
        {value: "strenght", label: "strenght"},
        {value: "agility", label: "agility"},
        {value: "intelligence", label: "intelligence"},
        {value: "constitution", label: "constitution"},
        {value: "spirit", label: "spirit"},
        {value: "wisdom", label: "wisdom"},
      ]
    })
  ]
};
