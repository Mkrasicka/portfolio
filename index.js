


// const initFullPageJS = () => {
//   new fullpage("#wrapper", {
//     //options here
//     licenseKey: "q2NraPV@b1",
//     controlArrows: false,
//     navigation: true,
//     keyboardScrolling: true,
//     autoScrolling: true,
//     scrollOverflow: true,
//     anchors: ["about"],
//     onLeave: (origin, destination, direction) => {
//       const section = destination.item;
//       console.log(destination.index);
//       const title = section.querySelector("h1");
//       const tl = new TimelineMax({ delay: 0.5 });
//       tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "-40", opacity: 1 });

      // if (destination.index === 2) {
      //   const hugoimg = document.querySelectorAll(".hugoimg");
      //   const description = document.querySelector(".description");
      //   const revealImg = document.querySelector(".reveal-img");

      //   tl.staggerFrom(
      //     "#about--text",
      //     1.5,
      //     {
      //       y: "100px",
      //       ease: Circ.easeOut,
      //       opacity: 0,
      //     },
      //     0.3
      //   );
      //   tl.fromTo(
      //     revealImg,
      //     { x: "0%", duration: 0.3 },
      //     { x: "100%", duration: 1.5 }
      //   );

      // } else if (destination.index === 2) {
      //   const innertextProject = document.querySelector(".innerTextPart");
      //   const btnProject = document.querySelector(".btnProject");
      //   tl.staggerFrom(
      //     innertextProject,
      //     1.5,
      //     {
      //       y: "1000px",
      //       ease: Circ.easeOut,
      //     },
      //     0.3
      //   );
      // } else if (destination.index === 4) {
      //   const revealImgContact = document.querySelector(".reveal-img--contact");
      //   tl.fromTo(
      //     revealImgContact,
      //     { x: "0%", duration: 0.3 },
      //     { x: "100%", duration: 1.5 }
      //   );
      // }
