import router from './router/index';
const newRouter: any = router;
let roterList: any = newRouter.options.routes[2].children;
const routeTree = () => {
  // 处理目录树结构
  let arr = roterList.map((r: any) => {
    let [name, status] = r.name.split('-');
    return {
      firstLevel: name.trim(),
      index: status.trim(),
      icon: r.meta.icon,
      children: [{ name: r.meta.name, path: r.path }],
    };
  });
  // 生成目录树
  let map: any = {};
  arr.forEach((a: any, b: any) => {
    if (!map[a.index]) {
      map[a.index] = a;
    } else {
      map[a.index].children.push(...a.children);
    }
  });
  return Object.values(map);
};

export { routeTree };
