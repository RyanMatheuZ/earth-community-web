import { showToast } from '@utils/toast';

export const copyToClipboard = (text: string, messageAfterCopy?: string) => {
  const defaultMessage = 'Texto copiado com sucesso!';

  navigator.clipboard.writeText(text);

  showToast(messageAfterCopy || defaultMessage, 'success');
};
