function CreateComStoreFactory(){
    this.componentsList=[]
    this.componentsMap={}
}

CreateComStoreFactory.prototype.register=function(component){
    this.componentsList.push(component)
    this.componentsMap[component.key]=component
    return this
}

CreateComStoreFactory.prototype.getComponentsList=function (){
    return this.componentsList
}
CreateComStoreFactory.prototype.getComponentsMap=function (){
    return this.componentsMap
}

export default CreateComStoreFactory