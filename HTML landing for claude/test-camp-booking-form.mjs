import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const html = readFileSync(new URL('./camp.html', import.meta.url), 'utf8');
const notifier = readFileSync(new URL('./tg-notify.php', import.meta.url), 'utf8');

assert.match(html, /id="booking-modal"/, 'camp.html should include a booking modal');
assert.match(html, /class="booking-form"/, 'booking modal should contain a booking form');
assert.match(html, /name="Имя"/, 'booking form should ask for a name');
assert.match(html, /name="Телефон"/, 'booking form should ask for a phone');
assert.match(html, /name="Направление"/, 'booking form should ask for a campus direction');
assert.match(html, /data-booking-open/, 'booking buttons should open the modal');
assert.doesNotMatch(
  html,
  /href="index\.html#contact"[^>]*>(?:\s*)Забронировать/,
  'booking buttons should not send visitors to the contacts block'
);
assert.match(html, /reachGoal'\s*,\s*'book_click'/, 'opening the modal should track book_click');
assert.match(html, /reachGoal'\s*,\s*'form_submit'/, 'submitting the modal should track form_submit');
assert.doesNotMatch(html, /FORMSUBMIT_URL/, 'booking form should not bypass server-side spam checks');
assert.match(html, /getAntiToken\(\)/, 'booking form should include the anti-spam token');
assert.match(html, /fetch\(TG_PROXY_URL,/, 'booking form should post to the server-side notifier');
assert.match(notifier, /\$MAIL_TO\s*=\s*'p\.toshiba@yandex\.ru'/, 'notifier should know the destination email');
assert.match(notifier, /mail\(\$MAIL_TO,/, 'notifier should send a copy by email');
assert.match(html, /от&nbsp;79&nbsp;000&nbsp;₽/, 'starting price should keep от 79 000 ₽ on one line');
assert.match(html, /\.info-strip \.inum\{[^}]*white-space:nowrap/, 'info strip numbers should not wrap');
assert.match(html, /\.hdr-phone\{[^}]*white-space:nowrap/, 'header phone should not wrap digit-by-digit');
assert.match(html, /@media\(max-width:1100px\)[\s\S]*?\.hdr-nav\{display:none\}/, 'header should switch to mobile navigation before it becomes cramped');

console.log('camp booking form checks passed');
