interface PostTagProps {
  text: string;
}

export default function PostTag({text}: PostTagProps) {
  return (
    <div className="flex flex-row items-center justify-center rounded-xl bg-gray-3 px-2 py-1">
      <span className="typo-16 mt-1 inline-block text-gray-1">#{text}</span>
    </div>
  );
}
