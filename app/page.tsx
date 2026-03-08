export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">MVP Factory Output</p>
        <h1>Turn insight into a deployable Next.js MVP</h1>
        <p className="lead">
          Source: https://mp.weixin.qq.com/s/6Sw7DAtPxPcKRZMlxgWDrA
        </p>
        <p className="judgment">
          User judgment: 做成面向创业者的产品化官网MVP，突出价值主张和线索收集
        </p>
      </section>

      <section className="panel">
        <h2>Lead Capture Stub</h2>
        <p>POST to <code>/api/lead</code> with email + note payload.</p>
      </section>
    </main>
  );
}
