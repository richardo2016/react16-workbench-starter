/// <reference types="antd-react-scripts" />

interface AnyObject {
    [k: string]: any
}
declare module "*.svg" {
    export default any
}

declare module "*.json" {
    export default AnyObject
}