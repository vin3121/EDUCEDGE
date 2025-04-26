export default function ScaleneTriangle() {
    return (
      <>
        <div className="scalene-triangle"></div>
        <style jsx>{`
          .scalene-triangle {
            width: 0;
            height: 0;
            border-left: 60px solid transparent;
            border-right: 30px solid transparent;
            border-bottom: 100px solid #3498db;
          }
        `}</style>
      </>
    );
}  