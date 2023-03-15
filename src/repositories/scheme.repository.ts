import { Scheme, InputParametr } from '@models/scheme.models';

class SchemaRepository {
  private schemaTemplate: Scheme = {
    name: 'sample-web-service',
    title: 'Пример веб-сервиса',
    description: 'Описание веб-сервиса',
    parameters: {
      input: [
        {
          type: 'number',
          name: 'input_num',
          title: 'Числовое значение, передаваемое на вход программе',
        },
        {
          type: 'select',
          name: 'input_text',
          title:
            'Текстовое значение, выбираемое из списка и передаваемое на вход программе',
          items: [
            { value: 'text1', label: 'Первый элемент' },
            { value: 'text2', label: 'Второй элемент' },
          ],
        },
      ],
      output: [
        {
          type: 'string',
          name: 'result',
          title: 'Результат выполнения программы',
        },
      ],
    },
    commands: {
      start: './start.sh ${input_num} ${input_text}',
    },
  };

  get(): Scheme {
    return this.schemaTemplate;
  }

  runCalculating(input: InputParametr): Scheme {
    return this.schemaTemplate;
  }
}

export default SchemaRepository;
