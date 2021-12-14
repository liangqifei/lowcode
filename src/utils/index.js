const { statSync,readdirSync,mkdir, readFile } = require('fs');
let TreeRoot=[]
let RootDir=''
let RootPathDir=''
let RootName=''
class TreeNode{
    constructor({title,type,children=[],parent='',pathname}){
        this.title=title
        this.children=children
        this.type=type
        this.pathname=pathname
    }
}

const initTree=()=>{
    let root=new TreeNode({
        title:RootName,
        pathname:RootPathDir,
        type:'root',
        children:[]
    })
    getFolderList(root,RootPathDir)

    console.log(root)
}


const createFile=(name)=>{
    let path=RootDir+'/'+name
    readFile(path, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
            console.log('file is EEXIT')
            return;
            }
            throw err;
        }
        // try {
        //     writeMyData(fd);
        // } finally {
        //     close(fd, (err) => {
        //     if (err) throw err;
        //     });
        // }
    });
}



const projectMkdir=async (pathname)=>{
    mkdir(pathname, { recursive: true }, (err) => {
        if (err) throw err;
    });
}

/**
 * 获取指定路径下的所有文件夹
 * @param {文件路径} path
 */
 function getFolderList(parentNode,path) {
    const files = readdirSync(path);
    files&&files.map(item=>{
        if(isDirectory(`${path}/${item}`)){
            let rootdata=new TreeNode({
                title:`${item}`,
                pathname:`${path}/${item}`,
                type:'dir',
                children:[]
            })
            parentNode.children.push(rootdata)
            getFolderList(rootdata,`${path}/${item}`)
        }else{
            let filedata=new TreeNode({
                title:`${item}`,
                pathname:`${path}/${item}`,
                type:'file',
                children:[]
            })
            parentNode.children.push(filedata)
        }
    })
    return parentNode
    // let catalogues = files.filter(item => {
    //   return isDirectory(`${path}/${item}`);
    // });
    // return catalogues;
  }
  
  /**
   * 判断指定路径是否文件夹
   * @param {文件路径} path
   */
  function isDirectory(path) {
    return statSync(path).isDirectory();
  }

/**
 * 生成源代码存放文件目录
 * @param {项目导出的路径名称} pathname 
 */
const initExportProject=(dir,name)=>{
    RootDir=dir
    RootName=name
    const pathname=RootPathDir=dir+'/'+name
    projectMkdir(pathname)
    
    console.log('创建导出项目目录成功')
}


module.exports= {
    initExportProject,
    createFile,
    initTree
}
