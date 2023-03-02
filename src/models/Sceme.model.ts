interface Scheme {
  name: string;
  title: string;
  description: string;
  parameters: {
    input: InputParametr[];
    output: OutputParametr[];
  };
  commands: Commands;
}

interface InputParametr {
  type: 'number' | 'select';
  name: 'input_num' | 'input_text';
  title: string;
  item: InputItem[];
}

interface OutputParametr {
  type: string;
  name: string;
  title: string;
}

interface InputItem {
  value: string;
  title: string;
}

interface Commands {
  start: string;
}
