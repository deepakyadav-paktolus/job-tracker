// const page = () => {
//   return (
//     <main className="h-[calc(100vh-80px)]  bg-black text-white flex items-center justify-center px-6">
//       <div className="max-w-3xl text-center">
//         <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
//           Something Amazing
//           <span className="block text-zinc-400">is Coming Soon</span>
//         </h1>
//         <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
//           We're building a modern experience for creators, developers, and
//           businesses. Stay tuned for the official launch.
//         </p>
//        <p className="mt-4 text-md text-zinc-400">Help Page</p>
//         <div className="mt-14 flex items-center justify-center gap-8 text-zinc-500 text-sm">
//           <span>Instagram</span>
//           <span>Twitter</span>
//           <span>LinkedIn</span>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default page;

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">Help Center</h1>

        <p className="text-muted-foreground mb-10">
          Find answers to common questions or contact support if you need more help.
        </p>


        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium">How do I create an account?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Click on the Sign Up button and fill in your details to get started.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium">How do I reset my password?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Go to login page and click “Forgot Password” to reset it via email.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium">How can I contact support?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                You can email us at support@example.com or use the contact form below.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-lg p-3 bg-transparent"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-lg p-3 bg-transparent"
            />

            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="w-full border rounded-lg p-3 bg-transparent"
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}