import { showToast } from '@utils/toast';

export const copyToClipboard = (text: string, messageAfterCopy?: string): void => {
  const defaultMessage = 'Texto copiado com sucesso!';

  navigator.clipboard.writeText(text);

  showToast(messageAfterCopy || defaultMessage, 'success');
};
