// const baseIm = {};
// const baseImport = (r: any) => {
//   r.keys().forEach((n: string) => {
//     baseIm[n.replace(/^\.\//, '').replace(/\.\w+$/, '')] = r(n).default;
//   });
//   return baseIm;
// };
// export default baseImport(require.context('./modules', true, /.ts$/));
let myModule = {};
const modulesList = require.context('./modules', true, /\.ts$/);
modulesList.keys().map(item => {
  const selfModule = modulesList(item);
  myModule = {
    ...myModule,
    ...(selfModule.default || selfModule),
  };
});
export default myModule;
