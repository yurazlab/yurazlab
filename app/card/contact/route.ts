const contact = "BEGIN:VCARD\r\nVERSION:3.0\r\nN:Зуев;Юрий;;;\r\nFN:Юрий Зуев\r\nTEL;TYPE=CELL:+79127662687\r\nURL:https://t.me/yurazlab\r\nURL:https://yurazlab.ru\r\nEND:VCARD\r\n";

export function GET() {
  return new Response(contact, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="yuri-zuev.vcf"',
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
