export const useNotification = defineStore('notification', () => {
  const isOpen = ref(false);
  const text = ref('');
  const title = ref('');

  const clearText = () => {
    text.value = '';
    title.value = '';
  }

  const closeNotification = () => {
    isOpen.value = false;
    clearText();
  }

  const showNotificaton = (message?: string, header?: string, timeout?: number) => {
    text.value = message || '';
    title.value = header || ''; 
    isOpen.value = true;

    if(timeout) {
      setTimeout(closeNotification, timeout);
    }
  }

  return {
    isOpen,
    text,
    title,
    showNotificaton,
    closeNotification
  }
})