export const colors = {
  // primary colors
  mainColor: '#1c7ed6',
  mainColor__tint: '#4998de',
  mainColor__shade: '#1665ab',

  // secondary colors  
  black18: '#181818',
  ff: '#fff',
  bg: '#f2f2f7'
};

export function makeDark() {
  colors.mainColor = 'red';
  console.log(colors.mainColor);
}