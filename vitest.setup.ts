import {
  FileSystemConfigLoader,
  HtmlValidate,
  SourceHooks,
} from 'html-validate/dist/es/index.js';
import { expect } from 'vitest';
import pretty from 'pretty';

expect.extend({
  toRenderValidHTML(received: string, expected?: SourceHooks) {
    const html = pretty(received, { ocd: false });

    const loader = new FileSystemConfigLoader({
      extends: ['html-validate:recommended'],
      elements: ['html5'],
    });

    const htmlValidate = new HtmlValidate(loader);
    const report = htmlValidate.validateStringSync(
      html,
      this.testPath || '',
      expected
    );

    const pass = report.valid;

    if (pass) {
      return {
        pass,
        message: () => 'Expected to render invalid HTML.',
      };
    }

    const ruleIdMaxLength = report.results[0].messages.reduce(
      (max, m) => Math.max(max, m.ruleId.length),
      0
    );

    const errors = report.results[0].messages.map(
      (m) =>
        `  - ${`${m.line}:${m.column}`.padEnd(5)} ${`[${m.ruleId}]:`.padEnd(
          ruleIdMaxLength + 3
        )} ${m.message}`
    );

    const message = () =>
      `Expected to render valid HTML but has ${
        report.errorCount
      } errors:\n\n${errors.join('\n')} \n\n${html}`;

    return {
      pass,
      message,
      actual: html,
    };
  },
});
