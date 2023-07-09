import { useState, useCallback } from 'react';

import { send } from '@emailjs/browser';

import { showToast } from '@utils/toast';

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async (
    serviceId: string,
    templateId: string,
    templatePrams?: Record<string, unknown> | undefined,
    publicKey?: string | undefined
  ) => {
    try {
      setIsLoading(true);

      await send(serviceId, templateId, templatePrams, publicKey);

      showToast('Mensagem enviada, em breve entraremos em contato!', 'success');
    } catch (error) {
      console.error(error);
      showToast('Mensagem não enviada, tente novamente mais tarde!', 'error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    handleSend
  };
};

export default useSendEmail;
