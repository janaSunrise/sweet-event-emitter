export class EventEmitter {
  public events: Map<string, Set<Function>>;
  public errorListener: Function | null = null;

  constructor() {
    this.events = new Map();
  }

  private get(event: string) {
    return this.events.get(event);
  }

  public listeners(event: string) {
    if (!this.events.has(event)) return [];

    return [...this.get(event)!];
  }

  public on(event: string, listener: Function) {
    if (!this.events.has(event)) this.events.set(event, new Set());

    this.get(event)?.add(listener);
  }

  public off(event: string, listener: Function) {
    if (!this.events.has(event)) return;

    this.get(event)?.delete(listener);
  }

  public once(event: string, listener: Function) {
    const wrapper = (...args: any[]) => {
      listener(...args);
      this.off(event, wrapper);
    };

    this.on(event, wrapper);
  }

  public emit(event: string, ...args: any[]) {
    if (!this.events.has(event)) return;

    this.get(event)?.forEach(listener => {
      try {
        listener(...args);
      } catch (err) {
        if (this.errorListener) this.errorListener(err);
      }
    });
  }

  public removeAllListeners(event: string) {
    if (!this.events.has(event)) return;

    this.get(event)?.clear();
  }

  // Register listener to run on error
  public onError(listener: Function) {
    this.errorListener = listener;
  }
}
