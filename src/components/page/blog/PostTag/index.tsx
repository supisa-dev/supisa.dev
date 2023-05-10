interface PostTagProps {
  text: string;
}

export default function PostTag({text}: PostTagProps) {
  return (
    <div className="flex flex-row items-center justify-center px-2 py-1 bg-gray-3 rounded-xl">
      <span className="mt-1 inline-block typo-16 text-gray-1">#{text}</span>
    </div>
  );
}
