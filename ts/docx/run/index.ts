import {XmlComponent, Attributes} from "../xml-components";
import {RunProperties} from "./properties";

export class Run implements XmlComponent {
    protected r: Array<XmlComponent>;
    private properties: RunProperties;

    constructor() {
        this.r = new Array<XmlComponent>();
        this.properties = new RunProperties();
        this.r.push(this.properties);
    }
    
    
}