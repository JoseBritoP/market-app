export const formatCurrency =(amount:number) => {
  return new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format(amount)
}; 

export function getImagePath(imagePath:string){
  const cloudinaryBaseUrl = 'https://res.cloudinary.com';
  if(imagePath.startsWith(cloudinaryBaseUrl)){
    return imagePath
  } else {
    return `/products/${imagePath}.jpg`
  }
}

export const formatDate = (dateTimeString:string) => {
  const date = new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  const formattedDateTime = `${day}/${month}/${year} - ${hours}:${minutes}${ampm}`;
  return formattedDateTime;
}