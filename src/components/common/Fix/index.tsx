import Link from 'next/link';
import {TiSpanner} from 'react-icons/ti';

export default function Fix() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-row items-center justify-center bg-fix-pattern">
      <div className="flex flex-col items-center justify-start gap-4">
        <TiSpanner size="60" color="#ececec" />
        <p className="flex flex-col items-center justify-start gap-1">
          <span className="typo-16 pc:typo-32 inline-block text-gray-1">
            해당 페이지는 작업중에 있습니다.
          </span>
          <span className="typo-16 pc:typo-32 inline-block text-gray-1">
            홈 화면으로&nbsp;
            <Link
              href="/"
              className="typo-16 pc:typo-32 inline-block text-gray-1 underline hover:text-gray-3"
            >
              이동하기
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
