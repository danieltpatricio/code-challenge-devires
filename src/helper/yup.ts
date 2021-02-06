import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'Inválido',
    required: 'Obrigatório',
  },
  string: {
    email: 'E-mail inválido',
    url: 'Deve ter um formato de URL válida',
    trim: 'Não deve conter espaços no início ou no fim.',
    lowercase: 'Deve estar em maiúsculo',
    uppercase: 'Deve estar em minúsculo',
  },
  number: {
    positive: 'Deve ser um número posítivo',
    negative: 'Deve ser um número negativo',
    integer: 'Deve ser um número inteiro',
  },
});

export default Yup;
