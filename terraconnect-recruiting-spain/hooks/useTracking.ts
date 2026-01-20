export const getTrackingParams = () => {
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return '';
  };

  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    fbp: getCookie('_fbp') || '',
    fbc: getCookie('_fbc') || '',
    user_agent: navigator.userAgent,
    page_url: window.location.href,
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
  };
};