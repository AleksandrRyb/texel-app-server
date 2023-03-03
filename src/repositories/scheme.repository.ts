import { Scheme, InputParametr } from '@models/scheme.models';

class SchemaRepository {
  private schemaTemplate: Scheme = {
    name: 'sample-web-service',
    title: 'Пример веб-сервиса',
    description: 'Описание веб-сервиса',
    parameters: {
      input: {},
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
