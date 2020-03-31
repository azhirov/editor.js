/**
 * Tool configuration object. Specified by Tool developer, so leave it as object
 */
interface ToolConfigInteface {
    deletable?: boolean;
    moveable?: boolean;
    [key: string]: any;
}

export type ToolConfig = ToolConfigInteface;
