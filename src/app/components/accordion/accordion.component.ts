import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionItems = [
    {
      id: '1',
      title: 'How many team members can I invite?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate eros sed pulvinar mattis. Suspendisse dignissim odio id velit pharetra euismod. ',
    },
    {
      id: '2',
      title: 'What is the maximum file upload size?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate eros sed pulvinar mattis. Suspendisse dignissim odio id velit pharetra euismod. ',
    },
    {
      id: '3',
      title: 'How do I reset my password?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate eros sed pulvinar mattis. Suspendisse dignissim odio id velit pharetra euismod. ',
    },
    {
      id: '4',
      title: 'Can I cancel my subscription?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate eros sed pulvinar mattis. Suspendisse dignissim odio id velit pharetra euismod. ',
    },
    {
      id: '5',
      title: 'Do you provide additional support?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate eros sed pulvinar mattis. Suspendisse dignissim odio id velit pharetra euismod. ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
