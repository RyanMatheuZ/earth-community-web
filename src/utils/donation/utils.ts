import { styledComponentsTheme as theme } from '@styles/theme';

export const allStatus = {
  'pending': {
    label: 'Pendente',
    color: theme.palette.warning.main
  },
  'approved': {
    label: 'Aprovado',
    color: theme.palette.primary.main
  },
  'authorized': {
    label: 'Autorizado',
    color: ''
  },
  'in_process': {
    label: 'Processando',
    color: theme.palette.info.main
  },
  'in_mediation': {
    label: 'Em mediação',
    color: ''
  },
  'rejected': {
    label: 'Rejeitado',
    color: ''
  },
  'cancelled': {
    label: 'Cancelado',
    color: theme.palette.error.main
  },
  'refunded': {
    label: 'Devolvido',
    color: ''
  },
  'charged_back': {
    label: 'Cobrado de volta',
    color: ''
  }
};

export const srcQRCode = {
  'approved': '/illustrations/qrcode/approved.svg',
  'cancelled': '/illustrations/qrcode/cancelled.svg',
  'in_process': '/illustrations/qrcode/in-process.svg'
};
