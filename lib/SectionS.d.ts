export interface Options {
    selector: string;
}
declare type sectionStartedEvent = (section: SectionInterface, direction: Direction) => void;
interface SectionInterface {
    index: number;
    from: number;
    to: number;
    classList: string[];
}
declare enum EventType {
    START = "start",
    MIDDLE = "middle",
    END = "end"
}
declare enum Direction {
    UP = "up",
    DOWN = "down"
}
declare class SectionS {
    private readonly options;
    private activeSection;
    private _scrollDirection;
    private sections;
    private elementsEvent;
    private events;
    private resizeEvent;
    private scrollEvent;
    /**
     * init
     */
    constructor(options?: Partial<Options>);
    /**
     * store changed event user is subscribed to
     */
    sectionStarted(cb: sectionStartedEvent): SectionS;
    /**
     * Add element for watching events
     */
    elementEvent(el: HTMLElement, cb: (type: EventType, direction: Direction) => void): SectionS;
    /**
     * Destroy
     */
    destroy(): void;
    /**
     * Caculate scroll direction
     */
    private scrollDirection;
    /**
     * Section change
     */
    private pageEvent;
    /**
     * Check for element events within the screoll
     */
    private elementEvents;
    /**
     * Caculate the sections based on the document and store
     */
    private setupSections;
    /**
     * check and call changed event
     */
    private callPageEnteredEvent;
    /**
     * Bounce functions. Prevent methods from being called to many times
     */
    private debounce;
}
export default SectionS;
