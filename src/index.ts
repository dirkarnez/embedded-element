class Embedded {
   private root: HTMLElement | null;

   constructor(elementId: string) {
      this.root = document.getElementById(elementId);

      if (this.root == null) {
         throw new Error('No rendering element');
      }

      this.root.appendChild(document.createElement("button"));
   }
}

export default (elementId: string) => new Embedded(elementId);