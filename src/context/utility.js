export const formatCurrency = (amount) => {
    if (amount == null) {
        return '';
      }
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };
  