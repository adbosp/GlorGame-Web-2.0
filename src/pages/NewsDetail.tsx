import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NewsDetail() {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-black text-white px-6 pt-28"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-gray-400 hover:text-white mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mb-6">
          News #{id}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Đây là trang NewsDetail, không phải mở hình ảnh.
          Sau này bạn có thể load nội dung theo ID từ Firebase / CMS.
        </p>
      </div>
    </motion.div>
  );
}
