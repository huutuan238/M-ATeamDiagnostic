/* ====== NGÂN HÀNG CÂU HỎI MERGEQUEST ======
   Mỗi câu hỏi (tình huống) gồm:
     ph  : tên giai đoạn (hiện trên HUD)
     wk  : mốc thời gian
     k   : năng lực được đánh giá (dùng trong báo cáo)
     ctx : bối cảnh
     q   : câu hỏi
     o   : danh sách đáp án, mỗi đáp án là
           [nội dung, mức phù hợp 1-4, thiên hướng (D/E/S/P), góc nhìn tâm lý]
   Thêm hoặc bớt câu hỏi ở đây, thanh tiến độ trong game sẽ tự khớp theo số câu.
   Lưu ý: cảnh 3D hiện có 6 cảnh (theo thứ tự câu); câu thứ 7 trở đi dùng cảnh cuối. */
const S = [
  {
    ph: "Forming",
    wk: "Tuần 1-2",
    k: "Dựng khung thẩm quyền (Team Charter, RACI) khi nhóm còn e dè",
    ctx: "Ngày đầu hợp nhất Masan FMCG và VinCommerce. Hai bên e dè, hoang mang, sợ sa thải.",
    q: "Trong buổi họp đầu tiên của Nhóm Mua sắm Tích hợp, hai bên đùn đẩy trách nhiệm duyệt hợp đồng do chưa rõ thẩm quyền. Với vai trò IMO Lead, bạn xử lý thế nào?",
    o: [
      [
        "Ban hành ngay Team Charter và ma trận RACI, chỉ định thẩm quyền duyệt rõ ràng, đặt 1 Quick Win đồng bộ 5 hợp đồng khung lớn.",
        4,
        "S",
        "Directing: quyết đoán, minh bạch, giảm bất an tức thì.",
      ],
      [
        "Để hai bên tự bàn bạc và tự thống nhất quy trình duyệt hợp đồng.",
        1,
        "P",
        "Delegating quá sớm: né tránh, buông thả khi nhóm chưa có khung định hướng.",
      ],
      [
        "Dừng họp chuyên môn, tổ chức trò chơi teambuilding để tăng tình cảm trước.",
        2,
        "E",
        "Coaching: chú trọng cảm xúc nhưng thiếu giải pháp cấu trúc ban đầu.",
      ],
      [
        "Ép VinCommerce áp dụng 100% quy trình phê duyệt của Masan ngay lập tức.",
        3,
        "D",
        "Authoritative: cứng nhắc, dễ kích hoạt kháng cự ngầm.cái chỗ nhận xét câu trả lời này có thể bắt n nhận xét sâu hơn dc k thùy. xong rồi chỉ ra câu trl phù hợp nhất nữa",
      ],
    ],
  },
  {
    ph: "Storming",
    wk: "Tuần 3-5",
    k: "Giải quyết xung đột tận gốc bằng đối thoại dữ liệu và an toàn tâm lý",
    ctx: "Bất đồng bùng nổ giữa mảng Bán lẻ tươi sống (VinCommerce) và Sản xuất công nghiệp (Masan).",
    q: "Trưởng phòng VinCommerce tố Masan làm hỏng hàng tươi sống do quy trình duyệt 5 cấp quá chậm; Trưởng phòng Masan tố VinCommerce quản lý rủi ro kém. Hai bên đập bàn tranh luận. Bạn xử lý sao?",
    o: [
      [
        "Mở phiên đối thoại dựa trên dữ liệu, phân loại xung đột Nhiệm vụ vs Quan hệ, áp dụng “Best-of-both” (công nghiệp hóa FMCG, linh hoạt tươi sống).",
        4,
        "E",
        "Thấu cảm, thấu đáo, kiến tạo an toàn tâm lý.",
      ],
      [
        "Dùng quyền lãnh đạo bắt VinCommerce tuân thủ quy trình Masan để đảm bảo kỷ luật.",
        2,
        "D",
        "Forcing: áp đặt quyền lực, dồn nén xung đột.",
      ],
      [
        "Yêu cầu hai bên tự làm báo cáo giải trình riêng rồi gửi sau.",
        1,
        "P",
        "Avoiding: trì hoãn, sợ đối đầu.",
      ],
      [
        "Đứng ra nhận lỗi thay cả hai bên và đề xuất tăng ngân sách bù đắp thiệt hại.",
        3,
        "E",
        "Smoothing: xoa dịu bề nổi, không giải quyết gốc rễ.",
      ],
    ],
  },
  {
    ph: "Midpoint Crisis",
    wk: "Tuần 6 · Gersick",
    k: "Chủ động tái đánh giá giả định tại điểm giữa dự án (Gersick Midpoint Reset)",
    ctx: "Tiến độ tích hợp trễ 35%, EBITDA sụt giảm, mốc 50% thời gian (45/90 ngày) đã trôi qua.",
    q: "Mốc 45 ngày đã đến nhưng KPI Cost Synergy mới đạt 15%. Cả team mệt mỏi và hoài nghi chiến lược tích hợp. Hành động chiến lược của bạn là gì?",
    o: [
      [
        "Triệu tập C-Suite họp “Gersick Reset”: công khai dữ liệu thực, rà soát giả định ban đầu, điều chỉnh mục tiêu và tái thiết kế nhịp làm việc.",
        4,
        "D",
        "Nhạy bén chiến lược, dũng cảm tái cấu trúc.",
      ],
      [
        "Ép làm thêm giờ, yêu cầu báo cáo Daily 2 lần/ngày để siết tiến độ.",
        2,
        "S",
        "Pushing harder: vội vã, gây quá tải và kiệt sức.",
      ],
      [
        "Thay ngay các Trưởng nhóm không đạt KPI.",
        1,
        "D",
        "Blaming: đổ lỗi, phá hủy lòng tin.",
      ],
      [
        "Tự cắt giảm 50% mục tiêu Synergy để báo cáo số liệu đẹp.",
        3,
        "E",
        "Scope reduction: thỏa hiệp tiêu chuẩn, thiếu cam kết.",
      ],
    ],
  },
  {
    ph: "Norming",
    wk: "Tuần 7-9",
    k: "Chuẩn hóa SOP, KPI liên chức năng và đào tạo chéo",
    ctx: "Xung đột đã hạ nhiệt, nhưng hai bên vẫn dùng song song 2 file Excel riêng theo dõi tồn kho, gây lệch dữ liệu.",
    q: "Nhóm tích hợp đã hòa nhã hơn nhưng thói quen dùng 2 hệ thống dữ liệu song song gây thất thoát thông tin. Bạn xử lý thế nào?",
    o: [
      [
        "Ban hành SOP chuẩn hóa duy nhất, thiết lập KPI liên chức năng và tổ chức đào tạo chéo giữa hai bên.",
        4,
        "S",
        "Kiến tạo hệ thống, đồng bộ hóa động lực.",
      ],
      [
        "Ban hành chế tài phạt hành chính nếu phát hiện ai dùng file Excel cũ.",
        2,
        "D",
        "Quản lý bằng trừng phạt, thiếu tinh tế.",
      ],
      [
        "Cho phép dùng song song 2 hệ thống thêm 6 tháng để mọi người từ từ quen.",
        1,
        "E",
        "Laissez-faire: ngại thay đổi, chấp nhận lãng phí.",
      ],
      [
        "Thưởng tiền mặt ngay cho bất kỳ ai nhập dữ liệu vào hệ thống mới.",
        3,
        "E",
        "Phụ thuộc động lực ngoại sinh ngắn hạn.",
      ],
    ],
  },
  {
    ph: "Performing",
    wk: "Tuần 10-11",
    k: "Trao quyền có giám sát bằng OKRs thay vì kiểm soát vi mô",
    ctx: "Nhóm tích hợp vận hành mượt mà, Synergy đạt 85% kế hoạch.",
    q: "Nhân viên đề xuất chiến dịch bán chéo sản phẩm Masan trên kệ VinMart mang tính đột phá nhưng có rủi ro nhỏ về tồn kho. Bạn xử lý sao?",
    o: [
      [
        "Trao quyền cho nhóm thử nghiệm, giám sát qua Dashboard OKRs và hỗ trợ nguồn lực khi gặp vật cản.",
        4,
        "P",
        "Tin tưởng, trao quyền, thúc đẩy đổi mới.",
      ],
      [
        "Yêu cầu trình duyệt chi tiết từng bước thử nghiệm trước khi thực hiện.",
        1,
        "S",
        "Micromanagement: kiểm soát vi mô, triệt hạ sáng kiến.",
      ],
      [
        "Bác bỏ vì không nằm trong kế hoạch PMI ban đầu.",
        2,
        "D",
        "An toàn quá mức, bỏ lỡ giá trị cộng hưởng.",
      ],
      [
        "Cho làm tự do hoàn toàn, không cần báo cáo hay theo dõi rủi ro.",
        3,
        "P",
        "Total hands-off: buông thả quản lý rủi ro.",
      ],
    ],
  },
  {
    ph: "Adjourning",
    wk: "Tuần 12",
    k: "Đóng dự án trọn vẹn: Lessons Learned, bàn giao tri thức, tái bố trí nhân sự",
    ctx: "Dự án M&A hoàn thành mục tiêu, nhóm dự án lâm thời chuẩn bị giải thể.",
    q: "Thành viên nhóm hoang mang về vị trí công việc lâu dài sau khi dự án kết thúc. Bạn kết thúc dự án như thế nào?",
    o: [
      [
        "Tổ chức Lessons Learned, bàn giao tài liệu tri thức cho bộ phận vận hành (BAU) và chủ động tái bố trí nhân sự vào vị trí chiến lược mới.",
        4,
        "E",
        "Trọn vẹn, nhân văn, bảo tồn tri thức tổ chức.",
      ],
      [
        "Tuyên bố giải thể nhóm ngay, trả nhân sự về phòng ban cũ.",
        1,
        "D",
        "Abrupt ending: thờ ơ, bỏ dở chặng cuối.",
      ],
      [
        "Tổ chức tiệc mừng hoành tráng nhưng không làm hồ sơ bàn giao.",
        3,
        "E",
        "Ham hình thức, thiếu tính bền vững.",
      ],
      [
        "Đề xuất kéo dài dự án để giữ lại nhóm lâm thời.",
        2,
        "D",
        "Níu kéo quyền lực, đầu cơ cá nhân.",
      ],
    ],
  },
  {
    ph: "Adjourning",
    wk: "Tuần 19",
    k: "Đóng dự án trọn vẹn: Lessons Learned, bàn giao tri thức, tái bố trí nhân sự",
    ctx: "Dự án M&A hoàn thành mục tiêu, nhóm dự án lâm thời chuẩn bị giải thể.",
    q: "Thành viên nhóm hoang mang về vị trí công việc lâu dài sau khi dự án kết thúc. Bạn kết thúc dự án như thế nào?",
    o: [
      [
        "Tổ chức Lessons Learned, bàn giao tài liệu tri thức cho bộ phận vận hành (BAU) và chủ động tái bố trí nhân sự vào vị trí chiến lược mới.",
        4,
        "E",
        "Trọn vẹn, nhân văn, bảo tồn tri thức tổ chức.",
      ],
      [
        "Tuyên bố giải thể nhóm ngay, trả nhân sự về phòng ban cũ.",
        1,
        "D",
        "Abrupt ending: thờ ơ, bỏ dở chặng cuối.",
      ],
      [
        "Tổ chức tiệc mừng hoành tráng nhưng không làm hồ sơ bàn giao.",
        3,
        "E",
        "Ham hình thức, thiếu tính bền vững.",
      ],
      [
        "Đề xuất kéo dài dự án để giữ lại nhóm lâm thời.",
        2,
        "D",
        "Níu kéo quyền lực, đầu cơ cá nhân.",
      ],
    ],
  },
];
