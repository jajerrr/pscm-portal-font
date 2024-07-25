import { provide, inject } from "vue";

const EventBusSymbol = Symbol("EventBus");

const createEventBus = () => {
  const EventBus = {};
  const events = {};

  EventBus.on = (eventName, callback) => {
    if (!events[eventName]) {
      events[eventName] = [];
    }
    events[eventName].push(callback);
  };

  EventBus.emit = (eventName, ...args) => {
    if (events[eventName]) {
      events[eventName].forEach((callback) => callback(...args));
    }
  };

  return EventBus;
};

export const provideEventBus = () => {
  const eventBus = createEventBus();
  provide(EventBusSymbol, eventBus);
  return eventBus;
};

export const useEventBus = () => {
  const eventBus = inject(EventBusSymbol);
  if (!eventBus) {
    throw new Error("EventBus is not provided!");
  }
  return eventBus;
};
