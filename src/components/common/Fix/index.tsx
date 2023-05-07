import Link from 'next/link';
import {TiSpanner} from 'react-icons/ti';

export default function Fix() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-fix-pattern flex flex-row items-center justify-center z-30">
      <div className="flex flex-col items-center justify-start gap-4">
        <TiSpanner size="60" color="#ececec" />
        <p className="flex flex-col items-center justify-start gap-1">
          <span className="inline-block typo-16 pc:typo-32 text-gray-1">
            해당 페이지는 작업중에 있습니다.
          </span>
          <span className="inline-block typo-16 pc:typo-32 text-gray-1">
            홈 화면으로&nbsp;
            <Link
              href="/"
              className="inline-block typo-16 pc:typo-32 text-gray-1 underline hover:text-gray-3"
            >
              이동하기
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
