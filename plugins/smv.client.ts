import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      plyr: (options: Plyr.Options | undefined) => new Plyr(".js-plyr", options),
    },
  };
});
