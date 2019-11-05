// const baseIm = {};
// const baseImport = (r: any) => {
//   r.keys().forEach((n: string) => {
//     baseIm[n.replace(/^\.\//, '').replace(/\.\w+$/, '')] = r(n).default;
//   });
//   return baseIm;
// };
// export default baseImport(require.context('./modules', true, /.ts$/));
const files: any = require.context('./modules/', false, /\.ts$/);
const modules: any = {};
files.keys().forEach((item: string) => {
  const tmpKey: string = item.replace(/\.\//g, '').replace(/\.ts/g, '');
  modules[tmpKey] = files(item).default;
});
export default modules;
// let myModule = {};
// const modulesList = require.context('./modules', true, /\.ts$/);
// modulesList.keys().map(item => {
//   const selfModule = modulesList(item);
//   myModule = {
//     ...myModule,
//     ...(selfModule.default || selfModule),
//   };
// });
// export default myModule;
