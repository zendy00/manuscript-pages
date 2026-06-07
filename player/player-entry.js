const _s = {
  async getActiveReplay() {
    return null;
  },
  async setActiveReplay() {
  },
  async clearActiveReplay() {
  }
}, ys = {
  isPrompterOpen: () => !1,
  async openPrompter() {
  },
  async closePrompter() {
  },
  async updatePrompter() {
  }
}, vs = {
  isRecordingArmed: () => !1
}, xs = {
  async get() {
  },
  async set() {
  },
  async remove() {
  },
  subscribe() {
    return () => {
    };
  }
}, ws = {
  async saveScenario() {
  },
  async setEphemeralScenario() {
  },
  async clearEphemeralScenario() {
  },
  async getScenarioById() {
    return null;
  },
  async getEphemeralEnvelope() {
    return null;
  }
}, ks = {
  async tryHandoff() {
    return !1;
  }
};
let Ir = _s, Or = ys, Rr = vs, Nr = xs, Dr = ws, Br = ks;
function qr(e) {
  e.storage && (Ir = e.storage), e.prompter && (Or = e.prompter), e.recording && (Rr = e.recording), e.prefs && (Nr = e.prefs), e.assetUrl && e.assetUrl, e.scenarioStorage && (Dr = e.scenarioStorage), e.handoff && (Br = e.handoff);
}
function We() {
  return Ir;
}
function ce() {
  return Or;
}
function Ss() {
  return Rr;
}
function W() {
  return Nr;
}
function Je() {
  return Dr;
}
function $s() {
  return Br;
}
const tn = "mn:player:state";
function As(e) {
  return e !== null && typeof e == "object" && typeof e.scenarioId == "string" && typeof e.stepIndex == "number";
}
const Ms = {
  async getActiveReplay() {
    const e = sessionStorage.getItem(tn);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return As(t) ? t : null;
    } catch {
      return null;
    }
  },
  async setActiveReplay(e) {
    sessionStorage.setItem(tn, JSON.stringify(e));
  },
  async clearActiveReplay() {
    sessionStorage.removeItem(tn);
  }
}, wt = /* @__PURE__ */ new Map();
function er(e, t) {
  const n = wt.get(e);
  if (n) for (const r of [...n]) r(e, t);
}
const Es = {
  async get(e) {
    const t = sessionStorage.getItem(`pref:${e}`);
    if (t)
      try {
        return JSON.parse(t);
      } catch {
        return;
      }
  },
  async set(e, t) {
    sessionStorage.setItem(`pref:${e}`, JSON.stringify(t)), er(e, t);
  },
  async remove(e) {
    sessionStorage.removeItem(`pref:${e}`), er(e, void 0);
  },
  subscribe(e, t) {
    for (const n of e) {
      let r = wt.get(n);
      r || (r = /* @__PURE__ */ new Set(), wt.set(n, r)), r.add(t);
    }
    return () => {
      var n;
      for (const r of e) (n = wt.get(r)) == null || n.delete(t);
    };
  }
}, Ls = (e) => ({
  resolveUrl(t) {
    return e ? new URL(t, e).href : t;
  }
}), Ts = {
  isSupported: () => !1,
  // no detached chrome window in the player → hide the button
  isPrompterOpen: () => !1,
  async openPrompter() {
  },
  async closePrompter() {
  },
  async updatePrompter() {
  }
}, Cs = {
  isRecordingArmed: () => !1
}, Ps = {
  async saveScenario() {
  },
  async setEphemeralScenario() {
  },
  async clearEphemeralScenario() {
  },
  async getScenarioById() {
    return null;
  },
  async getEphemeralEnvelope() {
    return null;
  }
};
function Is(e) {
  qr({
    storage: Ms,
    prefs: Es,
    assetUrl: Ls(e == null ? void 0 : e.assetBaseUrl),
    prompter: Ts,
    recording: Cs,
    scenarioStorage: Ps
  });
}
let fn = null;
function Os(e) {
  fn = e;
}
function A(e, t) {
  const n = e.replace(/[.-]/g, "_"), r = Rs();
  let o = "";
  try {
    o = chrome.i18n.getMessage(n, r);
  } catch {
  }
  return o === "" && fn && (o = fn(n, r)), o === "" ? e : o;
}
function Rs(e) {
  return [];
}
const Ns = { message: "Manuscript", description: "Extension name shown in the browser extensions page and in store listings." }, Ds = { message: "DOM-aware browser extension for authoring versioned web demos and manuals", description: "Short pitch shown under the name in the browser extensions page and in store listings." }, Bs = { message: "Cancel" }, qs = { message: "Delete" }, Fs = { message: "Overwrite" }, zs = { message: "Close" }, Hs = { message: "OK" }, Ws = { message: 'Delete the scenario "$NAME$"?', placeholders: { name: { content: "$1", example: "Checkout walkthrough" } } }, Us = { message: "Untitled" }, js = { message: "Got it" }, Vs = { message: "Start a new walkthrough" }, Gs = { message: "New Manuscript" }, Ys = { message: "Need help?" }, Xs = { message: "Open a web page, then press New Manuscript." }, Ks = { message: "Open a JSON file" }, Zs = { message: "Couldn't read this JSON file. Pick a valid Manuscript export." }, Js = { message: 'A scenario with this id already exists: "$NAME$". Overwrite it?', placeholders: { name: { content: "$1", example: "Checkout walkthrough" } } }, Qs = { message: "Previous Manuscripts" }, ea = { message: "Resume" }, ta = { message: "$N$ steps", placeholders: { n: { content: "$1", example: "3" } } }, na = { message: "Delete $NAME$", placeholders: { name: { content: "$1", example: "Checkout walkthrough" } } }, ra = { message: "↩ Inline" }, oa = { message: "Back to inline popup" }, sa = { message: "No active tab found." }, aa = { message: "This page is not supported (chrome://, edge://, new tab, file:// etc.). Open a regular web page and try again." }, ia = { message: "The extension could not connect to this page. Refresh the page (F5) and try again." }, ca = { message: "Unknown error occurred. Check the console." }, la = { message: "Language" }, ua = { message: "Manuscript authoring panel" }, da = { message: "Close panel" }, pa = { message: "Toggle dark mode" }, ha = { message: "Untitled walkthrough" }, fa = { message: "Annotation tools" }, ma = { message: "Text" }, ga = { message: "Shape" }, ba = { message: "Freedraw" }, _a = { message: "Replay" }, ya = { message: "Record screen" }, va = { message: "Replay walkthrough" }, xa = { message: "Open presenter prompter" }, wa = { message: "Export JSON" }, ka = { message: "Export" }, Sa = { message: "With thumbnails · full size" }, $a = { message: "Export without thumbnails" }, Aa = { message: "Lighter file · -lite" }, Ma = { message: "Undo (Ctrl+Z)" }, Ea = { message: "Redo (Ctrl+Shift+Z)" }, La = { message: "Settings" }, Ta = { message: "Settings" }, Ca = { message: "Narration voice" }, Pa = { message: "Auto (Google preferred)" }, Ia = { message: "Match full URL (query & hash)" }, Oa = { message: "On by default URL matching ignores ?query and #hash. Turn this on for sites that change the page via query or hash (e.g. ?tab=, #/reports) so step navigation and the wrong-page warning work." }, Ra = { message: "Close settings" }, Na = { message: "Local" }, Da = { message: "Remote Library" }, Ba = { message: "Remote library — coming soon." }, qa = { message: "Connect a public GitHub repo to load shared manuscripts." }, Fa = { message: "+ Add a GitHub source" }, za = { message: "Add source" }, Ha = { message: "Refresh all sources" }, Wa = { message: "Remove source" }, Ua = { message: "github.com/owner/repo  or  owner/repo/path" }, ja = { message: "Add" }, Va = { message: "Invalid URL. Expected github.com/owner/repo or owner/repo." }, Ga = { message: "Enter a GitHub URL or owner/repo." }, Ya = { message: "Click ↻ refresh to load this source." }, Xa = { message: "No manuscripts in this folder yet." }, Ka = { message: "This folder is empty." }, Za = { message: "Back to parent folder" }, Ja = { message: "Collapse source" }, Qa = { message: "Expand source" }, ei = { message: "Loading" }, ti = { message: "steps" }, ni = { message: "Edits won't be saved" }, ri = { message: "Save to local" }, oi = { message: "External page" }, si = { message: "Saved to local" }, ai = { message: "Save failed" }, ii = { message: "Copy formatting" }, ci = { message: "This step only" }, li = { message: "All steps" }, ui = { message: "Before you record" }, di = { message: "The browser shows two share dialogs. The first captures this tab; the second adds your TTS narration via system audio. Follow the numbered cues in each dialog." }, pi = { message: "1. Required — allow video capture" }, hi = { message: "First share dialog — when the current tab appears, click Allow." }, fi = { message: "When the dialog below shows your current tab, click <strong>Allow</strong>." }, mi = { message: "2. Optional — allow TTS audio capture" }, gi = { message: "Second share dialog — select a browser window and tick Also share system audio." }, bi = { message: "<ol><li>Select the <strong>Window</strong> tab at the top.</li><li>Pick a browser window.</li><li>Tick <strong>Also share system audio</strong> — required to capture the TTS voice.</li><li>Click <strong>Share</strong>.</li></ol><p>The video from this dialog isn't used. <strong>If you cancel this dialog the recording still runs, but the TTS voice will be silent in the file.</strong></p>" }, _i = { message: "Manuscript recorder" }, yi = { message: "This window is not recorded — it just controls the capture." }, vi = { message: "Click Start recording — the browser asks which surface to share. Pick your demo window and turn on system audio so the narration is captured." }, xi = { message: "Allow capture for video + TTS audio" }, wi = { message: "<ol><li>Select the <strong>Window</strong> tab at the top.</li><li>Choose the browser window running your demo.</li><li>Tick <strong>Share system audio</strong> — required to record the TTS narration.</li><li>Click <strong>Share</strong>.</li></ol>" }, ki = { message: "Start recording" }, Si = { message: "Stop & save" }, $i = { message: "While recording — Space: pause / resume the demo (recording keeps going) · Esc: stop & save" }, Ai = { message: "Ready." }, Mi = { message: "Recording" }, Ei = { message: "⏸ Paused — recording continues" }, Li = { message: "Scenario playing" }, Ti = { message: "Scenario paused" }, Ci = { message: "Saved. You can close this window." }, Pi = { message: `⚠ The narration won't be in the video. Share a Window (not a tab) and turn on "Share system audio". Click Start recording to try again.` }, Ii = { message: "Video quality" }, Oi = { message: "Standard" }, Ri = { message: "5 Mbps · 1080p" }, Ni = { message: "High quality" }, Di = { message: "25 Mbps · 1080p" }, Bi = { message: "Keep the panel and controls visible (tutorial mode)" }, qi = { message: "Useful when you're recording a how-to that shows Manuscript's own UI. The default uncluttered recording is best for end-user walkthroughs." }, Fi = { message: "Also record my microphone" }, zi = { message: "Adds your voice to the recording so you can narrate live or add extra commentary while the scenario is paused. The browser will ask permission once." }, Hi = { message: "While recording — <kbd>Space</kbd> pauses / resumes the scenario (recording keeps going) · <kbd>Esc</kbd> stops and saves" }, Wi = { message: "Cancel" }, Ui = { message: "Start recording" }, ji = { message: "Recording" }, Vi = { message: "Click to resume the scenario" }, Gi = { message: "Microphone permission denied — recording continues without your voice." }, Yi = { message: "Step name" }, Xi = { message: "Step description" }, Ki = { message: "Pick element for step $N$", placeholders: { n: { content: "$1", example: "1" } } }, Zi = { message: "Pick element with wand" }, Ji = { message: "Action — pause replay on this step" }, Qi = { message: "Delete step" }, ec = { message: "Auto-advance seconds" }, tc = { message: "Annotation tools" }, nc = { message: "Delete annotation" }, rc = { message: "Inner flow" }, oc = { message: "Sub-elements must be picked on the same page as the primary." }, sc = { message: "Add another element to this step" }, ac = { message: "Pull earlier (0.1s)" }, ic = { message: "Push later (0.1s)" }, cc = { message: "Stable attribute match — selector is healthy" }, lc = { message: "Layer 2 fallback — original attribute not found, matched by text + parent" }, uc = { message: "Layer 3 fallback — only the visual heuristic still matches; re-pick is recommended" }, dc = { message: "Element not found on this page — re-pick required" }, pc = { message: "Validate scenario" }, hc = { message: "Scenario health check" }, fc = { message: "Standalone player may stop here — the next step is a different origin." }, mc = { message: "From here on, narration won't autoplay on pages the tour advances to on its own — the browser blocks sound on a page opened without a click. The viewer clicks the page to play its narration. Pages the viewer advances by clicking keep sound. (Affects both the standalone player and the extension.)" }, gc = { message: "$OK$ healthy · $FALLBACK$ fallback · $BROKEN$ broken · $SKIPPED$ skipped (other pages)", placeholders: { ok: { content: "$1", example: "8" }, fallback: { content: "$2", example: "2" }, broken: { content: "$3", example: "1" }, skipped: { content: "$4", example: "3" } } }, bc = { message: "$OK$ healthy · $FALLBACK$ fallback · $BROKEN$ broken · $PENDING$ pending", placeholders: { ok: { content: "$1", example: "3" }, fallback: { content: "$2", example: "1" }, broken: { content: "$3", example: "1" }, pending: { content: "$4", example: "5" } } }, _c = { message: "Start" }, yc = { message: "Validating…" }, vc = { message: "Validation complete" }, xc = { message: "Checking this page · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/" } } }, wc = { message: "Moving to next page · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/checkout" } } }, kc = { message: "Pending" }, Sc = { message: "healthy" }, $c = { message: "fallback" }, Ac = { message: "broken" }, Mc = { message: "pending" }, Ec = { message: "Go to step" }, Lc = { message: "Re-pick element" }, Tc = { message: "Healthy" }, Cc = { message: "Layer 2 fallback" }, Pc = { message: "Layer 3 fallback" }, Ic = { message: "Not found" }, Oc = { message: "Other page" }, Rc = { message: "No element picked" }, Nc = { message: "All resolvable steps on this page check out. " }, Dc = { message: "Close" }, Bc = { message: "Go to $URL$", placeholders: { url: { content: "$1", example: "https://example.com" } } }, qc = { message: "Insert step here" }, Fc = { message: "Add step" }, zc = { message: "Step Name" }, Hc = { message: "Step counter" }, Wc = { message: "Previous (←)" }, Uc = { message: "Pause/Play (Space)" }, jc = { message: "Next (→)" }, Vc = { message: "Finish (→)" }, Gc = { message: "Exit (Esc)" }, Yc = { message: "Open presenter prompter" }, Xc = { message: "Presenter prompter" }, Kc = { message: "Move controls (drag)" }, Zc = { message: "Drag to move" }, Jc = { message: "Toggle vertical/horizontal" }, Qc = { message: "Toggle narration" }, el = { message: "Narration (TTS)" }, tl = { message: "Click anywhere to enable sound" }, nl = { message: "Click the demo page to enable sound" }, rl = { message: "Click the highlighted target to continue" }, ol = { message: "Skip" }, sl = { message: "Couldn't find the target" }, al = { message: "The element this step relies on isn't on the page anymore. Skip this step or stop replay." }, il = { message: "Skip" }, cl = { message: "Stop replay" }, ll = { message: "Different page" }, ul = { message: "This walkthrough was recorded on the page below. Open it now?" }, dl = { message: "Navigate" }, pl = { message: "Force replay here" }, hl = { message: "Cancel" }, fl = { message: "Now" }, ml = { message: "Next" }, gl = { message: "Steps" }, bl = { message: "Step $N$", placeholders: { n: { content: "$1", example: "3" } } }, _l = { message: "Waiting…" }, yl = { message: "Playing" }, vl = { message: "Paused" }, xl = { message: "Action step" }, wl = { message: "Previous" }, kl = { message: "Pause/Play" }, Sl = { message: "Next" }, $l = { message: "Toggle narration" }, Al = { message: "Narration (TTS)" }, Ml = { message: "Manuscript · Prompter" }, El = { message: "Thumbnails need host access. Click the Manuscript icon and press Start again to grant the permission." }, Ll = { message: "This element matches multiple targets — pick something more specific." }, Tl = { message: "Exported ✓" }, Cl = { message: "Export failed" }, Pl = { message: "No steps" }, Il = { message: "This tour can't continue on this page." }, Ol = {
  extension_name: Ns,
  extension_description: Ds,
  common_cancel: Bs,
  common_delete: qs,
  common_overwrite: Fs,
  common_close: zs,
  common_ok: Hs,
  common_delete_confirm: Ws,
  common_untitled: Us,
  common_got_it: js,
  popup_title_start: Vs,
  popup_cta_new: Gs,
  popup_cta_help: Ys,
  popup_cta_help_text: Xs,
  popup_cta_import: Ks,
  popup_import_failed: Zs,
  popup_import_overwrite_confirm: Js,
  popup_list_heading: Qs,
  popup_list_resume_tag: ea,
  popup_list_steps: ta,
  popup_list_delete_aria: na,
  popup_detach_detached: ra,
  popup_detach_inline_title: oa,
  popup_error_no_tab: sa,
  popup_error_bad_url: aa,
  popup_error_inject: ia,
  popup_error_unknown: ca,
  popup_language_label: la,
  panel_aria_region: ua,
  panel_close_aria: da,
  panel_palette_toggle_aria: pa,
  panel_title_placeholder: ha,
  panel_tool_label: fa,
  panel_tool_text: ma,
  panel_tool_shape: ga,
  panel_tool_freedraw: ba,
  panel_replay_aria: _a,
  panel_record_aria: ya,
  panel_replay_title: va,
  panel_prompter_aria: xa,
  panel_export_aria: wa,
  panel_export_menu_full: ka,
  panel_export_menu_full_meta: Sa,
  panel_export_menu_lite: $a,
  panel_export_menu_lite_meta: Aa,
  panel_undo_aria: Ma,
  panel_redo_aria: Ea,
  panel_settings_aria: La,
  panel_settings_title: Ta,
  panel_settings_voice_label: Ca,
  panel_settings_voice_auto: Pa,
  panel_settings_strict_url_label: Ia,
  panel_settings_strict_url_help: Oa,
  panel_settings_close_aria: Ra,
  popup_tabs_local: Na,
  popup_tabs_remote: Da,
  popup_remote_coming_soon: Ba,
  popup_remote_empty_copy: qa,
  popup_remote_add_cta: Fa,
  popup_remote_add_cta_aria: za,
  popup_remote_refresh_all_aria: Ha,
  popup_remote_remove_aria: Wa,
  popup_remote_add_placeholder: Ua,
  popup_remote_add_submit: ja,
  popup_remote_add_error_invalid: Va,
  popup_remote_add_error_empty: Ga,
  popup_remote_source_never_refreshed: Ya,
  popup_remote_source_empty: Xa,
  popup_remote_folder_empty: Ka,
  popup_remote_back_aria: Za,
  popup_remote_collapse_aria: Ja,
  popup_remote_expand_aria: Qa,
  popup_remote_progress: ei,
  popup_remote_steps_suffix: ti,
  panel_ephemeral_warning: ni,
  panel_ephemeral_import: ri,
  panel_ephemeral_bridge_fallback: oi,
  panel_ephemeral_saved: si,
  panel_ephemeral_save_failed: ai,
  copy_formatting: ii,
  apply_this_step: ci,
  apply_all_steps: li,
  recording_guide_title: ui,
  recording_guide_subtitle: di,
  recording_guide_step1_title: pi,
  recording_guide_step1_alt: hi,
  recording_guide_step1_desc_html: fi,
  recording_guide_step2_title: mi,
  recording_guide_step2_alt: gi,
  recording_guide_step2_desc_html: bi,
  recorder_title: _i,
  recorder_not_recorded: yi,
  recorder_instruction: vi,
  recorder_share_title: xi,
  recorder_share_steps_html: wi,
  recorder_start: ki,
  recorder_stop: Si,
  recorder_hint: $i,
  recorder_status_ready: Ai,
  recorder_status_recording: Mi,
  recorder_status_paused: Ei,
  recorder_scenario_playing: Li,
  recorder_scenario_paused: Ti,
  recorder_status_saved: Ci,
  recorder_warn_no_tts: Pi,
  recorder_quality_label: Ii,
  recorder_quality_standard: Oi,
  recorder_quality_standard_spec: Ri,
  recorder_quality_high: Ni,
  recorder_quality_high_spec: Di,
  recording_guide_keep_ui_label: Bi,
  recording_guide_keep_ui_hint: qi,
  recording_guide_mic_label: Fi,
  recording_guide_mic_hint: zi,
  recording_guide_keys_info_html: Hi,
  recording_guide_cancel: Wi,
  recording_guide_start: Ui,
  recording_paused_label: ji,
  recording_paused_aria: Vi,
  recording_mic_failed: Gi,
  step_name_placeholder: Yi,
  step_desc_placeholder: Xi,
  step_wand_aria: Ki,
  step_wand_title: Zi,
  step_action_aria: Ji,
  step_delete_aria: Qi,
  step_timer_aria: ec,
  step_annotations_title: tc,
  step_annotation_delete_aria: nc,
  step_subs_title: rc,
  sub_same_url_required: oc,
  sub_add_aria: sc,
  sub_shift_left: ac,
  sub_shift_right: ic,
  health_layer1: cc,
  health_layer2: lc,
  health_layer3: uc,
  health_broken: dc,
  panel_validate_aria: pc,
  validate_modal_title: hc,
  validate_player_cross_origin_warn: fc,
  validate_tts_autoplay_warn: mc,
  validate_summary: gc,
  validate_summary_running: bc,
  validate_start: _c,
  validate_in_progress: yc,
  validate_complete: vc,
  validate_checking: xc,
  validate_navigating_to: wc,
  validate_status_pending: kc,
  validate_label_ok: Sc,
  validate_label_fallback: $c,
  validate_label_broken: Ac,
  validate_label_pending: Mc,
  validate_row_go: Ec,
  validate_row_repick: Lc,
  validate_status_green: Tc,
  validate_status_yellow: Cc,
  validate_status_orange: Pc,
  validate_status_red: Ic,
  validate_status_skipped: Oc,
  validate_status_no_element: Rc,
  validate_no_issues: Nc,
  validate_close: Dc,
  step_link_aria: Bc,
  step_insert_aria: qc,
  step_add_aria: Fc,
  step_empty_name: zc,
  replay_counter_aria: Hc,
  replay_prev_aria: Wc,
  replay_pause_aria: Uc,
  replay_next_aria: jc,
  replay_finish_aria: Vc,
  replay_exit_aria: Gc,
  replay_prompter_aria: Yc,
  replay_prompter_title: Xc,
  replay_move_aria: Kc,
  replay_move_title: Zc,
  replay_orient_aria: Jc,
  replay_tts_aria: Qc,
  replay_tts_title: el,
  replay_tts_blocked_hint: tl,
  prompter_tts_blocked_hint: nl,
  replay_action_prompt: rl,
  replay_action_skip: ol,
  replay_notfound_title: sl,
  replay_notfound_body: al,
  replay_notfound_skip: il,
  replay_notfound_stop: cl,
  replay_url_mismatch_title: ll,
  replay_url_mismatch_body: ul,
  replay_url_mismatch_navigate: dl,
  replay_url_mismatch_force: pl,
  replay_url_mismatch_cancel: hl,
  prompter_now: fl,
  prompter_next: ml,
  prompter_steps: gl,
  prompter_step_no: bl,
  prompter_waiting: _l,
  prompter_playing: yl,
  prompter_paused: vl,
  prompter_action_step: xl,
  prompter_prev_aria: wl,
  prompter_pause_aria: kl,
  prompter_next_aria: Sl,
  prompter_tts_aria: $l,
  prompter_tts_title: Al,
  prompter_title: Ml,
  permission_thumbnail_needs_host: El,
  toast_ambiguous_selector: Ll,
  toast_export_success: Tl,
  toast_export_failed: Cl,
  toast_no_steps: Pl,
  player_handoff_unavailable: Il
}, Rl = { message: "Manuscript", description: "Extension name shown in the browser extensions page and in store listings." }, Nl = { message: "DOM 인식 기반으로 깨지지 않는 웹 시연·매뉴얼을 저작·재생하는 브라우저 확장 프로그램", description: "Short pitch shown under the name in the browser extensions page and in store listings." }, Dl = { message: "취소" }, Bl = { message: "삭제" }, ql = { message: "덮어쓰기" }, Fl = { message: "닫기" }, zl = { message: "확인" }, Hl = { message: '"$NAME$" 시나리오를 삭제하시겠습니까?', placeholders: { name: { content: "$1", example: "결제 안내" } } }, Wl = { message: "제목 없음" }, Ul = { message: "확인" }, jl = { message: "새 시연 시작" }, Vl = { message: "새 매뉴스크립트" }, Gl = { message: "도움말" }, Yl = { message: "웹 페이지를 연 후 새 매뉴스크립트 버튼을 누르세요." }, Xl = { message: "JSON 파일 가져오기" }, Kl = { message: "JSON 파일을 읽을 수 없습니다. 매뉴스크립트에서 내보낸 파일인지 확인해 주세요." }, Zl = { message: '같은 id의 "$NAME$" 시나리오가 이미 있습니다. 덮어쓸까요?', placeholders: { name: { content: "$1", example: "결제 안내" } } }, Jl = { message: "이전 매뉴스크립트" }, Ql = { message: "이어하기" }, eu = { message: "$N$개 단계", placeholders: { n: { content: "$1", example: "3" } } }, tu = { message: "$NAME$ 삭제", placeholders: { name: { content: "$1", example: "결제 안내" } } }, nu = { message: "↩ 인라인" }, ru = { message: "인라인 팝업으로 돌아가기" }, ou = { message: "활성 탭을 찾을 수 없습니다." }, su = { message: "이 페이지는 지원하지 않습니다 (chrome://, edge://, 새 탭, file:// 등). 일반 웹 페이지에서 다시 시도해 주세요." }, au = { message: "이 페이지에 연결할 수 없습니다. F5로 페이지를 새로고침한 뒤 다시 시도하세요." }, iu = { message: "알 수 없는 오류가 발생했습니다. 콘솔을 확인하세요." }, cu = { message: "언어" }, lu = { message: "매뉴스크립트 작성 패널" }, uu = { message: "패널 닫기" }, du = { message: "다크 모드 전환" }, pu = { message: "제목 없는 시연" }, hu = { message: "주석 도구" }, fu = { message: "텍스트" }, mu = { message: "도형" }, gu = { message: "자유 그리기" }, bu = { message: "재생" }, _u = { message: "화면 녹화" }, yu = { message: "시연 재생" }, vu = { message: "발표자 프롬프터 열기" }, xu = { message: "JSON 내보내기" }, wu = { message: "전체 내보내기" }, ku = { message: "썸네일 포함 · 원본 크기" }, Su = { message: "썸네일 없이 내보내기" }, $u = { message: "용량 ↓ · 가벼운 -lite 파일" }, Au = { message: "되돌리기 (Ctrl+Z)" }, Mu = { message: "다시 실행 (Ctrl+Shift+Z)" }, Eu = { message: "설정" }, Lu = { message: "설정" }, Tu = { message: "내레이션 음성" }, Cu = { message: "자동 (Google 우선)" }, Pu = { message: "전체 URL 일치 (쿼리·해시)" }, Iu = { message: "기본 URL 일치는 ?쿼리와 #해시를 무시합니다. 쿼리나 해시로 화면이 바뀌는 사이트(예: ?tab=, #/reports)라면 이 옵션을 켜야 단계 이동과 페이지 불일치 경고가 제대로 동작합니다." }, Ou = { message: "설정 닫기" }, Ru = { message: "내 라이브러리" }, Nu = { message: "원격저장소" }, Du = { message: "원격저장소 라이브러리 — 곧 제공됩니다." }, Bu = { message: "GitHub 공개 리포를 연결해서 공유 시나리오를 불러오세요." }, qu = { message: "+ GitHub 소스 추가" }, Fu = { message: "소스 추가" }, zu = { message: "전체 새로고침" }, Hu = { message: "소스 제거" }, Wu = { message: "github.com/owner/repo 또는 owner/repo/path" }, Uu = { message: "추가" }, ju = { message: "URL 형식이 올바르지 않습니다. github.com/owner/repo 또는 owner/repo 형식으로 입력해주세요." }, Vu = { message: "GitHub URL 또는 owner/repo를 입력해주세요." }, Gu = { message: "↻ 새로고침을 눌러 이 소스의 시나리오를 불러오세요." }, Yu = { message: "이 폴더에는 아직 시나리오가 없습니다." }, Xu = { message: "비어있는 폴더입니다." }, Ku = { message: "상위 폴더로" }, Zu = { message: "접기" }, Ju = { message: "펼치기" }, Qu = { message: "불러오는 중" }, ed = { message: "단계" }, td = { message: "편집은 저장되지 않습니다" }, nd = { message: "내 라이브러리에 저장" }, rd = { message: "외부 페이지" }, od = { message: "라이브러리에 저장했습니다" }, sd = { message: "저장에 실패했습니다" }, ad = { message: "서식 복사" }, id = { message: "이 스텝만" }, cd = { message: "전체 스텝" }, ld = { message: "녹화 시작 전" }, ud = { message: "브라우저가 share dialog 를 두 번 띄웁니다. 첫 번째는 이 탭을 캡처하고, 두 번째는 시스템 오디오로 TTS 음성을 추가합니다. 각 다이얼로그의 번호 순서대로 진행하세요." }, dd = { message: "1. 영상 녹화를 위한 필수 허용" }, pd = { message: "첫 번째 share dialog — 현재 탭이 나타나면 허용을 클릭하세요." }, hd = { message: "아래 다이얼로그에 현재 탭이 나타나면 <strong>허용</strong>을 클릭합니다." }, fd = { message: "2. TTS 녹음을 위한 옵션 허용" }, md = { message: "두 번째 share dialog — 브라우저 창 선택 + 시스템 오디오 공유 체크." }, gd = { message: "<ol><li>상단의 <strong>Window(윈도우)</strong> 탭을 선택합니다.</li><li>브라우저 창을 선택합니다.</li><li><strong>시스템 오디오 공유</strong>를 체크합니다 — TTS 음성 녹음 필수.</li><li><strong>공유</strong>를 클릭합니다.</li></ol><p>두 번째 다이얼로그의 영상은 사용되지 않습니다. <strong>이 다이얼로그를 취소해도 녹화는 진행되지만 TTS 음성은 녹음되지 않습니다.</strong></p>" }, bd = { message: "Manuscript 녹화기" }, _d = { message: "이 창은 녹화되지 않습니다 — 녹화를 제어하는 창입니다." }, yd = { message: "녹화 시작을 누르면 브라우저가 공유할 화면을 묻습니다. 데모 창을 고르고 시스템 오디오를 켜야 내레이션이 녹음됩니다." }, vd = { message: "영상 + TTS 음성 녹화 허용" }, xd = { message: "<ol><li>상단의 <strong>창</strong> 탭을 선택합니다.</li><li>데모가 열린 브라우저 창을 고릅니다.</li><li><strong>시스템 오디오 공유</strong>를 체크합니다 — TTS 내레이션 녹음에 필요.</li><li><strong>공유</strong>를 누릅니다.</li></ol>" }, wd = { message: "녹화 시작" }, kd = { message: "정지 후 저장" }, Sd = { message: "녹화 중 — Space: 데모 일시정지 / 재개 (녹화는 계속) · Esc: 정지 후 저장" }, $d = { message: "준비됨." }, Ad = { message: "녹화 중" }, Md = { message: "⏸ 일시정지 — 녹화는 계속됩니다" }, Ed = { message: "시나리오 재생 중" }, Ld = { message: "시나리오 일시정지 중" }, Td = { message: "저장됨. 이 창을 닫아도 됩니다." }, Cd = { message: "⚠ 내레이션이 영상에 들어가지 않습니다. 탭이 아니라 '창'을 공유하고 '시스템 오디오 공유'를 켜세요. '녹화 시작'을 다시 눌러 주세요." }, Pd = { message: "영상 화질" }, Id = { message: "일반 화질" }, Od = { message: "5 Mbps · 1080p" }, Rd = { message: "고화질" }, Nd = { message: "25 Mbps · 1080p" }, Dd = { message: "패널·컨트롤을 영상에 함께 노출 (튜토리얼 모드)" }, Bd = { message: "Manuscript UI를 직접 보여주는 how-to 녹화에 사용합니다. 일반 워크스루는 기본(자동 숨김)이 더 깔끔합니다." }, qd = { message: "내 마이크도 함께 녹음" }, Fd = { message: "시나리오 일시중지 중에 직접 설명을 더하거나 라이브 보이스 오버를 추가할 수 있도록 마이크 음성을 함께 녹음합니다. 브라우저가 한 번 권한을 요청합니다." }, zd = { message: "녹화 중 — <kbd>Space</kbd> 시나리오 일시중지 / 재개 (녹화는 계속) · <kbd>Esc</kbd> 종료 후 저장" }, Hd = { message: "취소" }, Wd = { message: "녹화 시작" }, Ud = { message: "녹화 중" }, jd = { message: "클릭하여 시나리오 재개" }, Vd = { message: "마이크 권한 거부 — 보이스 없이 녹화를 계속합니다." }, Gd = { message: "단계 이름" }, Yd = { message: "단계 설명" }, Xd = { message: "단계 $N$의 요소 선택", placeholders: { n: { content: "$1", example: "1" } } }, Kd = { message: "요소 선택" }, Zd = { message: "액션 — 이 단계에서 재생을 멈춤" }, Jd = { message: "단계 삭제" }, Qd = { message: "자동 진행 시간(초)" }, ep = { message: "주석 도구" }, tp = { message: "주석 삭제" }, np = { message: "내부 흐름" }, rp = { message: "보조 element 는 대표 element 와 같은 페이지에서만 추가할 수 있습니다." }, op = { message: "이 스텝에 element 추가" }, sp = { message: "0.1초 앞당기기" }, ap = { message: "0.1초 늦추기" }, ip = { message: "기본 selector 정상" }, cp = { message: "Layer 2 fallback — 원본 속성 못 찾음, 텍스트+부모 구조로 매칭" }, lp = { message: "Layer 3 fallback — 시각 휴리스틱만 남음, 재픽 권장" }, up = { message: "이 페이지에서 element 못 찾음 — 재픽 필요" }, dp = { message: "시연 검증" }, pp = { message: "시연 상태 검증" }, hp = { message: "여기서 standalone player 재생이 멈출 수 있어요 — 다음 단계가 다른 출처(cross-origin)입니다." }, fp = { message: "여기서부터, 투어가 자동으로 넘어가는 페이지에서는 내레이션이 자동 재생되지 않아요 — 브라우저가 클릭 없이 열린 페이지의 소리를 막기 때문입니다. 보는 사람이 페이지를 클릭하면 그 페이지의 음성이 재생됩니다. 직접 클릭해서 넘긴 페이지는 소리가 이어져요. (standalone player·확장 모두 해당)" }, mp = { message: "정상 $OK$ · fallback $FALLBACK$ · 깨짐 $BROKEN$ · 다른 페이지 $SKIPPED$", placeholders: { ok: { content: "$1", example: "8" }, fallback: { content: "$2", example: "2" }, broken: { content: "$3", example: "1" }, skipped: { content: "$4", example: "3" } } }, gp = { message: "정상 $OK$ · fallback $FALLBACK$ · 깨짐 $BROKEN$ · 대기 $PENDING$", placeholders: { ok: { content: "$1", example: "3" }, fallback: { content: "$2", example: "1" }, broken: { content: "$3", example: "1" }, pending: { content: "$4", example: "5" } } }, bp = { message: "검증 시작" }, _p = { message: "검증 중…" }, yp = { message: "검증 완료" }, vp = { message: "이 페이지 검증 중 · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/" } } }, xp = { message: "다음 페이지로 이동 중 · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/checkout" } } }, wp = { message: "대기" }, kp = { message: "정상" }, Sp = { message: "fallback" }, $p = { message: "깨짐" }, Ap = { message: "대기" }, Mp = { message: "이 스텝 보기" }, Ep = { message: "재픽" }, Lp = { message: "정상" }, Tp = { message: "Layer 2 fallback" }, Cp = { message: "Layer 3 fallback" }, Pp = { message: "못 찾음" }, Ip = { message: "다른 페이지" }, Op = { message: "element 미픽" }, Rp = { message: "이 페이지의 step 들은 모두 정상입니다." }, Np = { message: "닫기" }, Dp = { message: "$URL$로 이동", placeholders: { url: { content: "$1", example: "https://example.com" } } }, Bp = { message: "여기에 단계 삽입" }, qp = { message: "단계 추가" }, Fp = { message: "단계 이름" }, zp = { message: "단계 카운터" }, Hp = { message: "이전 (←)" }, Wp = { message: "일시정지/재생 (Space)" }, Up = { message: "다음 (→)" }, jp = { message: "완료 (→)" }, Vp = { message: "종료 (Esc)" }, Gp = { message: "발표자 프롬프터 열기" }, Yp = { message: "발표자 프롬프터" }, Xp = { message: "컨트롤 이동 (드래그)" }, Kp = { message: "드래그로 이동" }, Zp = { message: "세로/가로 전환" }, Jp = { message: "내레이션 켜기/끄기" }, Qp = { message: "내레이션 (TTS)" }, eh = { message: "소리를 위해 아무 곳이나 클릭하세요" }, th = { message: "소리를 위해 재생 화면을 클릭하세요" }, nh = { message: "강조된 대상을 클릭하면 계속 진행됩니다" }, rh = { message: "건너뛰기" }, oh = { message: "대상을 찾을 수 없습니다" }, sh = { message: "이 단계가 가리키는 요소가 페이지에 더 이상 없습니다. 건너뛰거나 재생을 멈출 수 있습니다." }, ah = { message: "건너뛰기" }, ih = { message: "재생 멈추기" }, ch = { message: "다른 페이지" }, lh = { message: "이 시연은 아래 페이지에서 녹화되었습니다. 그곳으로 이동할까요?" }, uh = { message: "이동" }, dh = { message: "여기서 강제 재생" }, ph = { message: "취소" }, hh = { message: "현재" }, fh = { message: "다음" }, mh = { message: "단계" }, gh = { message: "단계 $N$", placeholders: { n: { content: "$1", example: "3" } } }, bh = { message: "대기 중…" }, _h = { message: "재생 중" }, yh = { message: "일시정지" }, vh = { message: "액션 단계" }, xh = { message: "이전" }, wh = { message: "일시정지/재생" }, kh = { message: "다음" }, Sh = { message: "내레이션 켜기/끄기" }, $h = { message: "내레이션 (TTS)" }, Ah = { message: "매뉴스크립트 · 프롬프터" }, Mh = { message: "썸네일에 호스트 접근 권한이 필요합니다. 매뉴스크립트 아이콘을 클릭하여 시작을 다시 누르면 권한을 부여할 수 있습니다." }, Eh = { message: "이 요소가 여러 대상과 일치합니다 — 더 구체적인 요소를 선택해 주세요." }, Lh = { message: "내보냄 ✓" }, Th = { message: "내보내기에 실패했습니다" }, Ch = { message: "단계가 없습니다" }, Ph = { message: "이 투어는 여기서 계속할 수 없습니다." }, Ih = {
  extension_name: Rl,
  extension_description: Nl,
  common_cancel: Dl,
  common_delete: Bl,
  common_overwrite: ql,
  common_close: Fl,
  common_ok: zl,
  common_delete_confirm: Hl,
  common_untitled: Wl,
  common_got_it: Ul,
  popup_title_start: jl,
  popup_cta_new: Vl,
  popup_cta_help: Gl,
  popup_cta_help_text: Yl,
  popup_cta_import: Xl,
  popup_import_failed: Kl,
  popup_import_overwrite_confirm: Zl,
  popup_list_heading: Jl,
  popup_list_resume_tag: Ql,
  popup_list_steps: eu,
  popup_list_delete_aria: tu,
  popup_detach_detached: nu,
  popup_detach_inline_title: ru,
  popup_error_no_tab: ou,
  popup_error_bad_url: su,
  popup_error_inject: au,
  popup_error_unknown: iu,
  popup_language_label: cu,
  panel_aria_region: lu,
  panel_close_aria: uu,
  panel_palette_toggle_aria: du,
  panel_title_placeholder: pu,
  panel_tool_label: hu,
  panel_tool_text: fu,
  panel_tool_shape: mu,
  panel_tool_freedraw: gu,
  panel_replay_aria: bu,
  panel_record_aria: _u,
  panel_replay_title: yu,
  panel_prompter_aria: vu,
  panel_export_aria: xu,
  panel_export_menu_full: wu,
  panel_export_menu_full_meta: ku,
  panel_export_menu_lite: Su,
  panel_export_menu_lite_meta: $u,
  panel_undo_aria: Au,
  panel_redo_aria: Mu,
  panel_settings_aria: Eu,
  panel_settings_title: Lu,
  panel_settings_voice_label: Tu,
  panel_settings_voice_auto: Cu,
  panel_settings_strict_url_label: Pu,
  panel_settings_strict_url_help: Iu,
  panel_settings_close_aria: Ou,
  popup_tabs_local: Ru,
  popup_tabs_remote: Nu,
  popup_remote_coming_soon: Du,
  popup_remote_empty_copy: Bu,
  popup_remote_add_cta: qu,
  popup_remote_add_cta_aria: Fu,
  popup_remote_refresh_all_aria: zu,
  popup_remote_remove_aria: Hu,
  popup_remote_add_placeholder: Wu,
  popup_remote_add_submit: Uu,
  popup_remote_add_error_invalid: ju,
  popup_remote_add_error_empty: Vu,
  popup_remote_source_never_refreshed: Gu,
  popup_remote_source_empty: Yu,
  popup_remote_folder_empty: Xu,
  popup_remote_back_aria: Ku,
  popup_remote_collapse_aria: Zu,
  popup_remote_expand_aria: Ju,
  popup_remote_progress: Qu,
  popup_remote_steps_suffix: ed,
  panel_ephemeral_warning: td,
  panel_ephemeral_import: nd,
  panel_ephemeral_bridge_fallback: rd,
  panel_ephemeral_saved: od,
  panel_ephemeral_save_failed: sd,
  copy_formatting: ad,
  apply_this_step: id,
  apply_all_steps: cd,
  recording_guide_title: ld,
  recording_guide_subtitle: ud,
  recording_guide_step1_title: dd,
  recording_guide_step1_alt: pd,
  recording_guide_step1_desc_html: hd,
  recording_guide_step2_title: fd,
  recording_guide_step2_alt: md,
  recording_guide_step2_desc_html: gd,
  recorder_title: bd,
  recorder_not_recorded: _d,
  recorder_instruction: yd,
  recorder_share_title: vd,
  recorder_share_steps_html: xd,
  recorder_start: wd,
  recorder_stop: kd,
  recorder_hint: Sd,
  recorder_status_ready: $d,
  recorder_status_recording: Ad,
  recorder_status_paused: Md,
  recorder_scenario_playing: Ed,
  recorder_scenario_paused: Ld,
  recorder_status_saved: Td,
  recorder_warn_no_tts: Cd,
  recorder_quality_label: Pd,
  recorder_quality_standard: Id,
  recorder_quality_standard_spec: Od,
  recorder_quality_high: Rd,
  recorder_quality_high_spec: Nd,
  recording_guide_keep_ui_label: Dd,
  recording_guide_keep_ui_hint: Bd,
  recording_guide_mic_label: qd,
  recording_guide_mic_hint: Fd,
  recording_guide_keys_info_html: zd,
  recording_guide_cancel: Hd,
  recording_guide_start: Wd,
  recording_paused_label: Ud,
  recording_paused_aria: jd,
  recording_mic_failed: Vd,
  step_name_placeholder: Gd,
  step_desc_placeholder: Yd,
  step_wand_aria: Xd,
  step_wand_title: Kd,
  step_action_aria: Zd,
  step_delete_aria: Jd,
  step_timer_aria: Qd,
  step_annotations_title: ep,
  step_annotation_delete_aria: tp,
  step_subs_title: np,
  sub_same_url_required: rp,
  sub_add_aria: op,
  sub_shift_left: sp,
  sub_shift_right: ap,
  health_layer1: ip,
  health_layer2: cp,
  health_layer3: lp,
  health_broken: up,
  panel_validate_aria: dp,
  validate_modal_title: pp,
  validate_player_cross_origin_warn: hp,
  validate_tts_autoplay_warn: fp,
  validate_summary: mp,
  validate_summary_running: gp,
  validate_start: bp,
  validate_in_progress: _p,
  validate_complete: yp,
  validate_checking: vp,
  validate_navigating_to: xp,
  validate_status_pending: wp,
  validate_label_ok: kp,
  validate_label_fallback: Sp,
  validate_label_broken: $p,
  validate_label_pending: Ap,
  validate_row_go: Mp,
  validate_row_repick: Ep,
  validate_status_green: Lp,
  validate_status_yellow: Tp,
  validate_status_orange: Cp,
  validate_status_red: Pp,
  validate_status_skipped: Ip,
  validate_status_no_element: Op,
  validate_no_issues: Rp,
  validate_close: Np,
  step_link_aria: Dp,
  step_insert_aria: Bp,
  step_add_aria: qp,
  step_empty_name: Fp,
  replay_counter_aria: zp,
  replay_prev_aria: Hp,
  replay_pause_aria: Wp,
  replay_next_aria: Up,
  replay_finish_aria: jp,
  replay_exit_aria: Vp,
  replay_prompter_aria: Gp,
  replay_prompter_title: Yp,
  replay_move_aria: Xp,
  replay_move_title: Kp,
  replay_orient_aria: Zp,
  replay_tts_aria: Jp,
  replay_tts_title: Qp,
  replay_tts_blocked_hint: eh,
  prompter_tts_blocked_hint: th,
  replay_action_prompt: nh,
  replay_action_skip: rh,
  replay_notfound_title: oh,
  replay_notfound_body: sh,
  replay_notfound_skip: ah,
  replay_notfound_stop: ih,
  replay_url_mismatch_title: ch,
  replay_url_mismatch_body: lh,
  replay_url_mismatch_navigate: uh,
  replay_url_mismatch_force: dh,
  replay_url_mismatch_cancel: ph,
  prompter_now: hh,
  prompter_next: fh,
  prompter_steps: mh,
  prompter_step_no: gh,
  prompter_waiting: bh,
  prompter_playing: _h,
  prompter_paused: yh,
  prompter_action_step: vh,
  prompter_prev_aria: xh,
  prompter_pause_aria: wh,
  prompter_next_aria: kh,
  prompter_tts_aria: Sh,
  prompter_tts_title: $h,
  prompter_title: Ah,
  permission_thumbnail_needs_host: Mh,
  toast_ambiguous_selector: Eh,
  toast_export_success: Lh,
  toast_export_failed: Th,
  toast_no_steps: Ch,
  player_handoff_unavailable: Ph
};
function Oh(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r++) {
    const o = `$${r + 1}`;
    n = n.replace(new RegExp(`\\${o}`, "g"), t[r] ?? "");
  }
  return n;
}
function Rh(e) {
  return (t, n) => {
    const r = e[t];
    return r ? Oh(r.message, n) : "";
  };
}
function Nh() {
  const n = (navigator.language || "en").split("-")[0] === "ko" ? Ih : Ol, r = Rh(n);
  Os(r);
}
const mn = "manuscript:scenario-changed", Dh = 500, x = {
  scenario: null,
  currentStepIndex: 0,
  saveTimer: null,
  ephemeral: !1,
  ephemeralSource: null
};
function Fr() {
  x.ephemeral = !1, x.ephemeralSource = null;
}
function D() {
  return x.scenario;
}
function B() {
  return x.currentStepIndex;
}
function pe() {
  return x.scenario ? x.scenario.steps[x.currentStepIndex] ?? null : null;
}
function ot(e) {
  return document.addEventListener(mn, e), () => document.removeEventListener(mn, e);
}
function Z() {
  document.dispatchEvent(new CustomEvent(mn)), Bh();
}
function he() {
  x.scenario && (x.scenario.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
}
function Bh() {
  if (!x.scenario) return;
  if (x.ephemeral) {
    Je().setEphemeralScenario(x.scenario, x.ephemeralSource).catch((t) => {
      console.error("[manuscript] ephemeral save failed", t);
    });
    return;
  }
  x.saveTimer !== null && window.clearTimeout(x.saveTimer);
  const e = x.scenario;
  x.saveTimer = window.setTimeout(() => {
    x.saveTimer = null, Je().saveScenario(e).catch((t) => {
      console.error("[manuscript] save failed", t);
    });
  }, Dh);
}
function zr() {
  if (x.ephemeral) {
    x.scenario && Je().setEphemeralScenario(x.scenario, x.ephemeralSource).catch((e) => {
      console.error("[manuscript] ephemeral flush save failed", e);
    });
    return;
  }
  x.saveTimer !== null && (window.clearTimeout(x.saveTimer), x.saveTimer = null, x.scenario && Je().saveScenario(x.scenario).catch((e) => {
    console.error("[manuscript] flush save failed", e);
  }));
}
const Hr = "0.1.2";
function qh(e) {
  const t = Fh(e) ?? e;
  return t.length > 14 ? `${t.slice(0, 13)}…` : t;
}
function Fh(e) {
  return zh(e);
}
function zh(e) {
  const t = e.split(",")[0];
  if (!t) return null;
  const n = t.trim();
  return n && (n.startsWith('"') && n.endsWith('"') || n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n).trim() || null;
}
const Hh = 50;
let se = [], Te = -1, Ne = null, Ct = !1;
function Wr(e) {
  return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
}
function Ur() {
  var t;
  const e = D();
  return e ? ((t = e.steps[B()]) == null ? void 0 : t.id) ?? null : null;
}
function Wh() {
  const e = D();
  if (!e) return;
  const t = se[Te];
  Te >= 0 && t && JSON.stringify(t.scenario) === JSON.stringify(e) || (se.length = Te + 1, se.push({ scenario: Wr(e), stepId: Ur() }), se.length > Hh && se.shift(), Te = se.length - 1);
}
function jr() {
  Ne = null, Ct = !1;
  const e = D();
  if (!e) {
    se = [], Te = -1;
    return;
  }
  se = [{ scenario: Wr(e), stepId: Ur() }], Te = 0;
}
function Pt(e) {
  Ne !== null && Ne !== e && st(), Ne = e, Ct = !1;
}
function st() {
  Ne !== null && (Ne = null, Ct && (Ct = !1, Wh()));
}
function Uh(e, t) {
  zr(), x.scenario = e, x.currentStepIndex = 0, Fr(), Z(), jr();
}
function jh() {
  const e = x.ephemeral;
  zr(), x.scenario = null, x.currentStepIndex = 0, Fr(), e && Je().clearEphemeralScenario(), Z(), jr();
}
function fb(e) {
  const t = pe();
  if (!t || !x.scenario) return;
  const r = { ...t.spotlight ?? {}, ...e };
  for (const o of Object.keys(r))
    r[o] === void 0 && delete r[o];
  Object.keys(r).length === 0 ? delete t.spotlight : t.spotlight = r, he(), Z();
}
function Wt(e) {
  x.scenario && (e < 0 || e >= x.scenario.steps.length || e !== x.currentStepIndex && (x.currentStepIndex = e, Z()));
}
function mb(e) {
  if (!x.scenario) return;
  const t = { ...e };
  for (const r of Object.keys(t))
    t[r] === void 0 && delete t[r];
  const n = Object.keys(t).length === 0;
  for (const r of x.scenario.steps)
    n ? delete r.spotlight : r.spotlight = { ...t };
  he(), Z();
}
function Vr(e) {
  const t = pe();
  !t || !x.scenario || (t.annotations = t.annotations.filter((n) => n.id !== e), he(), Z());
}
function L(e, t) {
  const n = pe();
  !n || !x.scenario || (n.annotations = n.annotations.map(
    (r) => r.id === e ? { ...r, ...t } : r
  ), he(), Z());
}
function Gr() {
  var e;
  return ((e = pe()) == null ? void 0 : e.annotations) ?? [];
}
function E(e) {
  return Gr().find((t) => t.id === e);
}
function Vh(e, t) {
  const n = pe();
  !n || !x.scenario || (n.annotations = n.annotations.map(
    (r) => r.kind === e ? { ...r, ...t } : r
  ), he(), Z());
}
function Gh(e, t) {
  if (x.scenario) {
    for (const n of x.scenario.steps)
      n.annotations = n.annotations.map(
        (r) => r.kind === e ? { ...r, ...t } : r
      );
    he(), Z();
  }
}
function Yh(e, t) {
  if (!x.scenario) return;
  const n = t.trim();
  if (!n) return;
  const r = x.scenario.customColors ?? {}, o = r[e] ?? [];
  o.includes(n) || (x.scenario.customColors = {
    ...r,
    [e]: [...o, n]
  }, he(), Z());
}
function Xh(e, t) {
  if (!x.scenario || !x.scenario.customColors) return;
  const n = x.scenario.customColors[e];
  !n || !n.includes(t) || (x.scenario.customColors = {
    ...x.scenario.customColors,
    [e]: n.filter((r) => r !== t)
  }, he(), Z());
}
const gn = "manuscript:mode-changed";
let kt = "idle";
function Yr() {
  return kt;
}
function Xr(e) {
  if (e === kt) return;
  const t = kt;
  kt = e, document.dispatchEvent(
    new CustomEvent(gn, {
      detail: { prev: t, next: e }
    })
  );
}
function Kr(e) {
  const t = (n) => e(n.detail);
  return document.addEventListener(gn, t), () => document.removeEventListener(gn, t);
}
const Zr = 5e3, U = {
  scenarios: "manuscript.scenarios",
  lastEdited: "manuscript.lastEdited",
  settings: "manuscript.settings",
  popupMode: "manuscript.popupMode",
  detachedWindowId: "manuscript.detachedWindowId",
  /** Cross-page replay state. action step에서 페이지 navigate된 후 새 content
   * script init이 이 키를 읽어 replay를 이어간다. */
  activeReplay: "manuscript.activeReplay",
  /** Replay controls 가로/세로 orientation. 사용자 토글 후 다음 replay에도 유지. */
  replayControlsOrientation: "manuscript.replayControlsOrientation",
  /**
   * Replay controls pill의 화면 좌표 {left, top} px. 사용자가 드래그로
   * 옮긴 위치를 cross-page navigation 후에도 복원하려고 보관. 미설정
   * 이면 기본 위치(하단 가운데)로 mount.
   */
  replayControlsPosition: "manuscript.replayControlsPosition",
  /**
   * Tab-scoped one-shot panel flag for cross-page navigation. When the
   * user clicks a step-card link icon, panel-navigation writes
   * `{ [tabId]: { scenarioId, stepIndex } }` here and navigates. The
   * next content-script init in the SAME tab consumes (read + remove)
   * the entry and mounts the panel at the saved step. Other tabs see no
   * entry for their tabId and stay quiet.
   */
  pendingPanelByTab: "manuscript.pendingPanelByTab",
  /**
   * Tab-scoped sticky panel state — set when the panel mounts in a tab,
   * cleared when the user presses × in that tab (or the tab closes).
   * Value is `{ [tabId]: scenarioId }`. The content script on the next
   * page in the SAME tab re-mounts the panel; siblings' tabs do nothing.
   * Replaces the prior global `activePanelScenarioId` which leaked the
   * panel to every newly opened tab.
   */
  activePanelByTab: "manuscript.activePanelByTab",
  /**
   * Annotation Ctrl+C clipboard. 페이지 이동 후에도 Ctrl+V가 동작하도록
   * 마지막 copy된 annotation을 영속화. content script init이 읽어 in-memory
   * cache로 복원. 다음 copy로 덮어쓰기 전까지 유지.
   */
  annotationClipboard: "manuscript.annotationClipboard",
  /**
   * Presenter prompter — chrome.windows.create로 띄운 별도 popup window가
   * 표시할 state. content script가 syncControls 시점에 write,
   * popup이 chrome.storage.onChanged로 받아 갱신.
   */
  prompterState: "manuscript.prompterState",
  /**
   * Presenter prompter command bus. Popup이 버튼 클릭으로 명령을 여기에
   * write하면, content script가 onChanged로 받아 처리한 뒤 키를 비운다.
   */
  prompterCommand: "manuscript.prompterCommand",
  /**
   * Prompter chrome window id — background가 관리. content script가 close
   * 요청을 보낼 때 background가 이 id로 chrome.windows.remove.
   */
  prompterWindowId: "manuscript.prompterWindowId",
  /**
   * Prompter window 안 tab의 id. windowId 만으로는 chrome 이 id 를 재사용해
   * 일반 창과 collision 하는 케이스를 거를 수 없어서 함께 저장한다.
   * 검증 시 chrome.tabs.get(prompterTabId) 가 alive 하고 그 tab.windowId 가
   * prompterWindowId 와 일치하는지 확인 — tab.url 은 host_permissions 가
   * 없으면 비어 있어 검증 자료로 못 쓰기 때문에 id 기반으로 한다.
   */
  prompterTabId: "manuscript.prompterTabId",
  /**
   * Prompter popup이 명령을 relay할 대상 content tab id. 사용자가 prompter를
   * 연 시점의 sender.tab.id가 저장됨. popup → background → 이 tab으로
   * chrome.tabs.sendMessage로 forward.
   */
  prompterClientTabId: "manuscript.prompterClientTabId",
  /**
   * TTS narration toggle — controls bar 와 prompter 의 스피커 아이콘이
   * 공유. true 면 step 진입 시 description 을 SpeechSynthesisUtterance 로
   * 읽고, 그 utterance 가 끝난 뒤에 (그리고 step.autoAdvanceMs 가 지난 뒤에)
   * 다음 step 으로 진행. 두 쪽 UI 모두 chrome.storage.onChanged 로 동기화.
   */
  ttsEnabled: "manuscript.ttsEnabled",
  /**
   * User-picked voice name. null/missing → tts.ts auto-picks
   * (Google-prefixed locale voice first, then any locale match, then
   * browser default). Set via prompter's voice dropdown.
   */
  ttsVoiceName: "manuscript.ttsVoiceName",
  /**
   * Transient flag: true while a narration utterance is blocked by the
   * browser autoplay policy ('not-allowed' on a document with no user
   * activation — typically a script-driven cross-origin player resume).
   * The speaking context (content/player) sets it; the controls pill reads
   * the in-memory signal directly, and the detached prompter window reads
   * this key via storage so it can show the "click to enable sound" hint
   * too. Cleared the moment narration starts, stops, or pauses.
   */
  ttsBlocked: "manuscript.ttsBlocked",
  /**
   * Active design-tokens palette. One of the IDs declared in
   * src/styles/tokens.css. Defaults to 'studio' when unset. Toggle
   * lives in the popup header and the floating-panel header (left of
   * the × close button). Subscribed via design-tokens.ts so every
   * shadow host re-applies the new palette live.
   */
  palette: "manuscript.palette",
  /**
   * Remote-library sources + per-source catalog cache. Phase 3.3 of
   * docs/15.REMOTE-LIBRARY-PLAN.md. Single object:
   *   { sources: [...], catalogs: { [sourceId]: { items, lastRefreshed } } }
   * Combined storage so add/remove updates stay atomic and a stray catalog
   * entry can't outlive its source.
   */
  remoteLibrary: "manuscript.remoteLibrary",
  /**
   * Per-source collapsed state in the popup Remote tab. Map of
   * { [sourceId]: true } — only collapsed entries are stored so the
   * default (expanded) doesn't accumulate stale keys after a source
   * is removed. Persisted so users with several repos don't re-collapse
   * on every popup open.
   */
  remoteCollapsed: "manuscript.remoteCollapsed",
  /**
   * Ephemeral scenario slot — single in-flight scenario that must NOT be
   * persisted to the user's `scenarios[]` library. Used by:
   *   - web-bridge: host-page-launched plays (fixes the bug where
   *     bridge-loaded scenarios leaked into the popup's saved list)
   *   - remote library: GitHub-fetched plays (Q5, docs/15.REMOTE-LIBRARY-PLAN.md)
   * The slot survives cross-page navigation so resume works.
   * Cleared on endScenario / replay exit / panel × close.
   */
  ephemeralScenario: "manuscript.ephemeralScenario",
  /**
   * Cross-page selector validation session (v0.4.0). When the author
   * clicks the validate button on a scenario whose steps span multiple
   * URLs, we walk the URL groups one at a time. Between pages the
   * session lives here so the next page's content script can re-open
   * the modal and continue. Cleared once the modal is closed (or after
   * a stale-session timeout on read).
   */
  validationSession: "manuscript.validationSession",
  /**
   * Recording-active flag (window-capture path). Set by the content
   * coordinator between 'recording.armed' and 'recording.ended' so a
   * cross-page navigation re-enters recording mode. Background also clears
   * it when the recorder window is closed, so an orphaned flag can't leave a
   * refreshed tab stuck in recording mode. See src/content/recording/recording.ts.
   */
  recordingActive: "manuscript.recordingActive",
  /**
   * Recorder chrome window id — background tracks it (set on 'recording.open')
   * so chrome.windows.onRemoved can detect the user closing the recorder
   * window and tell the demo tab to leave recording mode.
   */
  recorderWindowId: "manuscript.recorderWindowId",
  /** Demo tab the recorder window is recording — notified on recorder close. */
  recorderClientTabId: "manuscript.recorderClientTabId",
  /**
   * Set when the recorder navigates the demo tab to the scenario's starting
   * page before capture. The freshly-loaded content script sees it, clears
   * it, and emits 'recording.pageReady' so the recorder can start cleanly
   * (the navigation itself stays out of the video).
   */
  recordingPendingArm: "manuscript.recordingPendingArm",
  /**
   * Pre-recording demo-window state ({windowId, state}). The recorder
   * fullscreens the demo window during capture; this stashes the prior
   * state so exitDemoFullscreen can restore it (never back to fullscreen).
   * Set by recording-lifecycle.enterDemoFullscreen, cleared on exit.
   */
  recPrevWindowState: "manuscript.recPrevWindowState"
}, te = 2147483e3, oe = "http://www.w3.org/2000/svg", tr = "manuscript-spotlight-mask", Kh = "oklch(0.42 0.09 250)", Zh = 3, Jh = "rgb(0, 0, 0)", Qh = 0.55, Ge = 14;
let xe = null, z = null, F = null, q = null, I = null, ne = null, Ye = 0, bn = [], Ce = null;
function Jr(e) {
  Ye++, xe = e, z || rf(), yn(), ze(), Qr(e), Ce || (Ce = ot(yn));
}
function _n() {
  Ye++, xe = null, eo(), Ce == null || Ce(), Ce = null, z && (z.remove(), z = null, F = null, q = null, I = null, ne = null);
}
function ef(e, t = {}) {
  var a;
  const n = t.durationMs ?? 300;
  if (!xe || !z || n <= 0) {
    Jr(e), (a = t.onDone) == null || a.call(t);
    return;
  }
  const r = tf();
  Ye++;
  const o = Ye;
  xe = e, yn(), Qr(e);
  const s = performance.now();
  function i(c) {
    var d;
    if (o !== Ye) return;
    const l = Math.min(1, (c - s) / n), u = nf(l), h = to(e);
    no({
      x: ft(r.x, h.x, u),
      y: ft(r.y, h.y, u),
      width: ft(r.width, h.width, u),
      height: ft(r.height, h.height, u)
    }), l < 1 ? requestAnimationFrame(i) : (ze(), (d = t.onDone) == null || d.call(t));
  }
  requestAnimationFrame(i);
}
function tf() {
  if (!F) return { x: 0, y: 0, width: 0, height: 0 };
  const e = 4, t = Number(F.getAttribute("x") ?? 0) + e, n = Number(F.getAttribute("y") ?? 0) + e, r = Number(F.getAttribute("width") ?? 0) - e * 2, o = Number(F.getAttribute("height") ?? 0) - e * 2;
  return { x: t, y: n, width: r, height: o };
}
function ft(e, t, n) {
  return e + (t - e) * n;
}
function nf(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Qr(e) {
  var n;
  eo();
  const t = [window];
  try {
    const r = (n = e.ownerDocument) == null ? void 0 : n.defaultView;
    r && r !== window && t.push(r);
  } catch {
  }
  for (const r of t) {
    const o = ze;
    r.addEventListener("scroll", o, !0), bn.push({ target: r, remove: () => r.removeEventListener("scroll", o, !0) });
  }
  window.addEventListener("resize", ze);
}
function eo() {
  for (const e of bn) e.remove();
  bn = [], window.removeEventListener("resize", ze);
}
function rf() {
  z = document.createElementNS(oe, "svg"), z.setAttribute("data-manuscript", "ui"), z.style.cssText = [
    "position: fixed",
    "top: 0",
    "left: 0",
    "width: 100vw",
    "height: 100vh",
    // svg 전체는 클릭 통과 — ringRect만 pointer-events: stroke 로 활성화.
    "pointer-events: none",
    `z-index: ${te}`
  ].join("; "), z.setAttribute("width", "100%"), z.setAttribute("height", "100%");
  const e = document.createElementNS(oe, "defs"), t = document.createElementNS(oe, "mask");
  t.setAttribute("id", tr);
  const n = document.createElementNS(oe, "rect");
  n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("fill", "white"), t.appendChild(n), F = document.createElementNS(oe, "rect"), F.setAttribute("fill", "black"), F.setAttribute("rx", "4"), F.setAttribute("ry", "4"), t.appendChild(F), e.appendChild(t), z.appendChild(e), ne = document.createElementNS(oe, "rect"), ne.setAttribute("width", "100%"), ne.setAttribute("height", "100%"), ne.setAttribute("mask", `url(#${tr})`), z.appendChild(ne), q = document.createElementNS(oe, "rect"), q.setAttribute("fill", "none"), q.setAttribute("rx", "4"), q.setAttribute("ry", "4"), q.style.pointerEvents = "none", z.appendChild(q), I = document.createElementNS(oe, "rect"), I.setAttribute("fill", "none"), I.setAttribute("stroke", "transparent"), I.setAttribute("stroke-width", String(Ge)), I.setAttribute("rx", "4"), I.setAttribute("ry", "4"), I.setAttribute("pointer-events", "stroke"), I.style.cursor = "pointer", I.addEventListener("click", of), z.appendChild(I), document.body.appendChild(z);
}
function yn() {
  var s;
  if (!q || !ne) return;
  const e = ((s = pe()) == null ? void 0 : s.spotlight) ?? {}, t = e.stroke ?? Kh, n = e.strokeWidth ?? Zh, r = e.dimColor ?? Jh, o = e.dimOpacity ?? Qh;
  q.setAttribute("stroke", t), q.setAttribute("stroke-width", String(n)), ne.setAttribute("fill", r), ne.setAttribute("fill-opacity", String(Math.max(0, Math.min(1, o)))), ze();
}
function of(e) {
  Yr() !== "replay" && (!xe || !I || (e.stopPropagation(), e.preventDefault(), import("./spotlight-editor.js").then((t) => {
    I && t.openSpotlightEditor(I);
  })));
}
function ze() {
  xe && no(to(xe));
}
function to(e) {
  const t = e.getBoundingClientRect(), n = sf(e);
  return {
    x: t.left + n.x,
    y: t.top + n.y,
    width: t.width,
    height: t.height
  };
}
function no(e) {
  if (!F || !q || !I) return;
  const t = 4, n = e.x - t, r = e.y - t, o = e.width + t * 2, s = e.height + t * 2;
  F.setAttribute("x", String(n)), F.setAttribute("y", String(r)), F.setAttribute("width", String(o)), F.setAttribute("height", String(s));
  const i = Math.max(0, Number(q.getAttribute("stroke-width") ?? 0)), a = n - i / 2, c = r - i / 2, l = o + i, u = s + i;
  q.setAttribute("x", String(a)), q.setAttribute("y", String(c)), q.setAttribute("width", String(l)), q.setAttribute("height", String(u));
  const h = a - Ge / 2, d = c - Ge / 2, p = l + Ge, f = u + Ge;
  I.setAttribute("x", String(h)), I.setAttribute("y", String(d)), I.setAttribute("width", String(p)), I.setAttribute("height", String(f));
}
function sf(e) {
  try {
    const t = e.ownerDocument, n = t == null ? void 0 : t.defaultView;
    if (!n || n === window) return { x: 0, y: 0 };
    const r = n.frameElement;
    if (!r) return { x: 0, y: 0 };
    const o = r.getBoundingClientRect();
    return { x: o.left, y: o.top };
  } catch {
    return { x: 0, y: 0 };
  }
}
function nn(e, t, n) {
  if (e && e.length) {
    const [r, o] = t, s = Math.PI / 180 * n, i = Math.cos(s), a = Math.sin(s);
    for (const c of e) {
      const [l, u] = c;
      c[0] = (l - r) * i - (u - o) * a + r, c[1] = (l - r) * a + (u - o) * i + o;
    }
  }
}
function af(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function cf(e, t, n, r = 1) {
  const o = n, s = Math.max(t, 0.1), i = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, a = [0, 0];
  if (o) for (const l of i) nn(l, a, o);
  const c = (function(l, u, h) {
    const d = [];
    for (const b of l) {
      const k = [...b];
      af(k[0], k[k.length - 1]) || k.push([k[0][0], k[0][1]]), k.length > 2 && d.push(k);
    }
    const p = [];
    u = Math.max(u, 0.1);
    const f = [];
    for (const b of d) for (let k = 0; k < b.length - 1; k++) {
      const R = b[k], P = b[k + 1];
      if (R[1] !== P[1]) {
        const T = Math.min(R[1], P[1]);
        f.push({ ymin: T, ymax: Math.max(R[1], P[1]), x: T === R[1] ? R[0] : P[0], islope: (P[0] - R[0]) / (P[1] - R[1]) });
      }
    }
    if (f.sort(((b, k) => b.ymin < k.ymin ? -1 : b.ymin > k.ymin ? 1 : b.x < k.x ? -1 : b.x > k.x ? 1 : b.ymax === k.ymax ? 0 : (b.ymax - k.ymax) / Math.abs(b.ymax - k.ymax))), !f.length) return p;
    let m = [], g = f[0].ymin, _ = 0;
    for (; m.length || f.length; ) {
      if (f.length) {
        let b = -1;
        for (let k = 0; k < f.length && !(f[k].ymin > g); k++) b = k;
        f.splice(0, b + 1).forEach(((k) => {
          m.push({ s: g, edge: k });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= g))), m.sort(((b, k) => b.edge.x === k.edge.x ? 0 : (b.edge.x - k.edge.x) / Math.abs(b.edge.x - k.edge.x))), (h !== 1 || _ % u == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const k = b + 1;
        if (k >= m.length) break;
        const R = m[b].edge, P = m[k].edge;
        p.push([[Math.round(R.x), g], [Math.round(P.x), g]]);
      }
      g += h, m.forEach(((b) => {
        b.edge.x = b.edge.x + h * b.edge.islope;
      })), _++;
    }
    return p;
  })(i, s, r);
  if (o) {
    for (const l of i) nn(l, a, -o);
    (function(l, u, h) {
      const d = [];
      l.forEach(((p) => d.push(...p))), nn(d, u, h);
    })(c, a, -o);
  }
  return c;
}
function at(e, t) {
  var n;
  const r = t.hachureAngle + 90;
  let o = t.hachureGap;
  o < 0 && (o = 4 * t.strokeWidth), o = Math.round(Math.max(o, 0.1));
  let s = 1;
  return t.roughness >= 1 && (((n = t.randomizer) === null || n === void 0 ? void 0 : n.next()) || Math.random()) > 0.7 && (s = o), cf(e, o, r, s || 1);
}
class Rn {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    return this._fillPolygons(t, n);
  }
  _fillPolygons(t, n) {
    const r = at(t, n);
    return { type: "fillSketch", ops: this.renderLines(r, n) };
  }
  renderLines(t, n) {
    const r = [];
    for (const o of t) r.push(...this.helper.doubleLineOps(o[0][0], o[0][1], o[1][0], o[1][1], n));
    return r;
  }
}
function Ut(e) {
  const t = e[0], n = e[1];
  return Math.sqrt(Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2));
}
let lf = class extends Rn {
  fillPolygons(t, n) {
    let r = n.hachureGap;
    r < 0 && (r = 4 * n.strokeWidth), r = Math.max(r, 0.1);
    const o = at(t, Object.assign({}, n, { hachureGap: r })), s = Math.PI / 180 * n.hachureAngle, i = [], a = 0.5 * r * Math.cos(s), c = 0.5 * r * Math.sin(s);
    for (const [l, u] of o) Ut([l, u]) && i.push([[l[0] - a, l[1] + c], [...u]], [[l[0] + a, l[1] - c], [...u]]);
    return { type: "fillSketch", ops: this.renderLines(i, n) };
  }
};
class uf extends Rn {
  fillPolygons(t, n) {
    const r = this._fillPolygons(t, n), o = Object.assign({}, n, { hachureAngle: n.hachureAngle + 90 }), s = this._fillPolygons(t, o);
    return r.ops = r.ops.concat(s.ops), r;
  }
}
class df {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = at(t, n = Object.assign({}, n, { hachureAngle: 0 }));
    return this.dotsOnLines(r, n);
  }
  dotsOnLines(t, n) {
    const r = [];
    let o = n.hachureGap;
    o < 0 && (o = 4 * n.strokeWidth), o = Math.max(o, 0.1);
    let s = n.fillWeight;
    s < 0 && (s = n.strokeWidth / 2);
    const i = o / 4;
    for (const a of t) {
      const c = Ut(a), l = c / o, u = Math.ceil(l) - 1, h = c - u * o, d = (a[0][0] + a[1][0]) / 2 - o / 4, p = Math.min(a[0][1], a[1][1]);
      for (let f = 0; f < u; f++) {
        const m = p + h + f * o, g = d - i + 2 * Math.random() * i, _ = m - i + 2 * Math.random() * i, b = this.helper.ellipse(g, _, s, s, n);
        r.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: r };
  }
}
class pf {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = at(t, n);
    return { type: "fillSketch", ops: this.dashedLine(r, n) };
  }
  dashedLine(t, n) {
    const r = n.dashOffset < 0 ? n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap : n.dashOffset, o = n.dashGap < 0 ? n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap : n.dashGap, s = [];
    return t.forEach(((i) => {
      const a = Ut(i), c = Math.floor(a / (r + o)), l = (a + o - c * (r + o)) / 2;
      let u = i[0], h = i[1];
      u[0] > h[0] && (u = i[1], h = i[0]);
      const d = Math.atan((h[1] - u[1]) / (h[0] - u[0]));
      for (let p = 0; p < c; p++) {
        const f = p * (r + o), m = f + r, g = [u[0] + f * Math.cos(d) + l * Math.cos(d), u[1] + f * Math.sin(d) + l * Math.sin(d)], _ = [u[0] + m * Math.cos(d) + l * Math.cos(d), u[1] + m * Math.sin(d) + l * Math.sin(d)];
        s.push(...this.helper.doubleLineOps(g[0], g[1], _[0], _[1], n));
      }
    })), s;
  }
}
class hf {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap, o = n.zigzagOffset < 0 ? r : n.zigzagOffset, s = at(t, n = Object.assign({}, n, { hachureGap: r + o }));
    return { type: "fillSketch", ops: this.zigzagLines(s, o, n) };
  }
  zigzagLines(t, n, r) {
    const o = [];
    return t.forEach(((s) => {
      const i = Ut(s), a = Math.round(i / (2 * n));
      let c = s[0], l = s[1];
      c[0] > l[0] && (c = s[1], l = s[0]);
      const u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
      for (let h = 0; h < a; h++) {
        const d = 2 * h * n, p = 2 * (h + 1) * n, f = Math.sqrt(2 * Math.pow(n, 2)), m = [c[0] + d * Math.cos(u), c[1] + d * Math.sin(u)], g = [c[0] + p * Math.cos(u), c[1] + p * Math.sin(u)], _ = [m[0] + f * Math.cos(u + Math.PI / 4), m[1] + f * Math.sin(u + Math.PI / 4)];
        o.push(...this.helper.doubleLineOps(m[0], m[1], _[0], _[1], r), ...this.helper.doubleLineOps(_[0], _[1], g[0], g[1], r));
      }
    })), o;
  }
}
const j = {};
class ff {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const mf = 0, rn = 1, nr = 2, mt = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function on(e, t) {
  return e.type === t;
}
function Nn(e) {
  const t = [], n = (function(i) {
    const a = new Array();
    for (; i !== ""; ) if (i.match(/^([ \t\r\n,]+)/)) i = i.substr(RegExp.$1.length);
    else if (i.match(/^([aAcChHlLmMqQsStTvVzZ])/)) a[a.length] = { type: mf, text: RegExp.$1 }, i = i.substr(RegExp.$1.length);
    else {
      if (!i.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      a[a.length] = { type: rn, text: `${parseFloat(RegExp.$1)}` }, i = i.substr(RegExp.$1.length);
    }
    return a[a.length] = { type: nr, text: "" }, a;
  })(e);
  let r = "BOD", o = 0, s = n[o];
  for (; !on(s, nr); ) {
    let i = 0;
    const a = [];
    if (r === "BOD") {
      if (s.text !== "M" && s.text !== "m") return Nn("M0,0" + e);
      o++, i = mt[s.text], r = s.text;
    } else on(s, rn) ? i = mt[r] : (o++, i = mt[s.text], r = s.text);
    if (!(o + i < n.length)) throw new Error("Path data ended short");
    for (let c = o; c < o + i; c++) {
      const l = n[c];
      if (!on(l, rn)) throw new Error("Param not a number: " + r + "," + l.text);
      a[a.length] = +l.text;
    }
    if (typeof mt[r] != "number") throw new Error("Bad segment: " + r);
    {
      const c = { key: r, data: a };
      t.push(c), o += i, s = n[o], r === "M" && (r = "L"), r === "m" && (r = "l");
    }
  }
  return t;
}
function ro(e) {
  let t = 0, n = 0, r = 0, o = 0;
  const s = [];
  for (const { key: i, data: a } of e) switch (i) {
    case "M":
      s.push({ key: "M", data: [...a] }), [t, n] = a, [r, o] = a;
      break;
    case "m":
      t += a[0], n += a[1], s.push({ key: "M", data: [t, n] }), r = t, o = n;
      break;
    case "L":
      s.push({ key: "L", data: [...a] }), [t, n] = a;
      break;
    case "l":
      t += a[0], n += a[1], s.push({ key: "L", data: [t, n] });
      break;
    case "C":
      s.push({ key: "C", data: [...a] }), t = a[4], n = a[5];
      break;
    case "c": {
      const c = a.map(((l, u) => u % 2 ? l + n : l + t));
      s.push({ key: "C", data: c }), t = c[4], n = c[5];
      break;
    }
    case "Q":
      s.push({ key: "Q", data: [...a] }), t = a[2], n = a[3];
      break;
    case "q": {
      const c = a.map(((l, u) => u % 2 ? l + n : l + t));
      s.push({ key: "Q", data: c }), t = c[2], n = c[3];
      break;
    }
    case "A":
      s.push({ key: "A", data: [...a] }), t = a[5], n = a[6];
      break;
    case "a":
      t += a[5], n += a[6], s.push({ key: "A", data: [a[0], a[1], a[2], a[3], a[4], t, n] });
      break;
    case "H":
      s.push({ key: "H", data: [...a] }), t = a[0];
      break;
    case "h":
      t += a[0], s.push({ key: "H", data: [t] });
      break;
    case "V":
      s.push({ key: "V", data: [...a] }), n = a[0];
      break;
    case "v":
      n += a[0], s.push({ key: "V", data: [n] });
      break;
    case "S":
      s.push({ key: "S", data: [...a] }), t = a[2], n = a[3];
      break;
    case "s": {
      const c = a.map(((l, u) => u % 2 ? l + n : l + t));
      s.push({ key: "S", data: c }), t = c[2], n = c[3];
      break;
    }
    case "T":
      s.push({ key: "T", data: [...a] }), t = a[0], n = a[1];
      break;
    case "t":
      t += a[0], n += a[1], s.push({ key: "T", data: [t, n] });
      break;
    case "Z":
    case "z":
      s.push({ key: "Z", data: [] }), t = r, n = o;
  }
  return s;
}
function oo(e) {
  const t = [];
  let n = "", r = 0, o = 0, s = 0, i = 0, a = 0, c = 0;
  for (const { key: l, data: u } of e) {
    switch (l) {
      case "M":
        t.push({ key: "M", data: [...u] }), [r, o] = u, [s, i] = u;
        break;
      case "C":
        t.push({ key: "C", data: [...u] }), r = u[4], o = u[5], a = u[2], c = u[3];
        break;
      case "L":
        t.push({ key: "L", data: [...u] }), [r, o] = u;
        break;
      case "H":
        r = u[0], t.push({ key: "L", data: [r, o] });
        break;
      case "V":
        o = u[0], t.push({ key: "L", data: [r, o] });
        break;
      case "S": {
        let h = 0, d = 0;
        n === "C" || n === "S" ? (h = r + (r - a), d = o + (o - c)) : (h = r, d = o), t.push({ key: "C", data: [h, d, ...u] }), a = u[0], c = u[1], r = u[2], o = u[3];
        break;
      }
      case "T": {
        const [h, d] = u;
        let p = 0, f = 0;
        n === "Q" || n === "T" ? (p = r + (r - a), f = o + (o - c)) : (p = r, f = o);
        const m = r + 2 * (p - r) / 3, g = o + 2 * (f - o) / 3, _ = h + 2 * (p - h) / 3, b = d + 2 * (f - d) / 3;
        t.push({ key: "C", data: [m, g, _, b, h, d] }), a = p, c = f, r = h, o = d;
        break;
      }
      case "Q": {
        const [h, d, p, f] = u, m = r + 2 * (h - r) / 3, g = o + 2 * (d - o) / 3, _ = p + 2 * (h - p) / 3, b = f + 2 * (d - f) / 3;
        t.push({ key: "C", data: [m, g, _, b, p, f] }), a = h, c = d, r = p, o = f;
        break;
      }
      case "A": {
        const h = Math.abs(u[0]), d = Math.abs(u[1]), p = u[2], f = u[3], m = u[4], g = u[5], _ = u[6];
        h === 0 || d === 0 ? (t.push({ key: "C", data: [r, o, g, _, g, _] }), r = g, o = _) : (r !== g || o !== _) && (so(r, o, g, _, h, d, p, f, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), r = g, o = _);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), r = s, o = i;
    }
    n = l;
  }
  return t;
}
function je(e, t, n) {
  return [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
}
function so(e, t, n, r, o, s, i, a, c, l) {
  const u = (h = i, Math.PI * h / 180);
  var h;
  let d = [], p = 0, f = 0, m = 0, g = 0;
  if (l) [p, f, m, g] = l;
  else {
    [e, t] = je(e, t, -u), [n, r] = je(n, r, -u);
    const Y = (e - n) / 2, N = (t - r) / 2;
    let ee = Y * Y / (o * o) + N * N / (s * s);
    ee > 1 && (ee = Math.sqrt(ee), o *= ee, s *= ee);
    const Ae = o * o, Me = s * s, gs = Ae * Me - Ae * N * N - Me * Y * Y, bs = Ae * N * N + Me * Y * Y, Qn = (a === c ? -1 : 1) * Math.sqrt(Math.abs(gs / bs));
    m = Qn * o * N / s + (e + n) / 2, g = Qn * -s * Y / o + (t + r) / 2, p = Math.asin(parseFloat(((t - g) / s).toFixed(9))), f = Math.asin(parseFloat(((r - g) / s).toFixed(9))), e < m && (p = Math.PI - p), n < m && (f = Math.PI - f), p < 0 && (p = 2 * Math.PI + p), f < 0 && (f = 2 * Math.PI + f), c && p > f && (p -= 2 * Math.PI), !c && f > p && (f -= 2 * Math.PI);
  }
  let _ = f - p;
  if (Math.abs(_) > 120 * Math.PI / 180) {
    const Y = f, N = n, ee = r;
    f = c && f > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, d = so(n = m + o * Math.cos(f), r = g + s * Math.sin(f), N, ee, o, s, i, 0, c, [f, Y, m, g]);
  }
  _ = f - p;
  const b = Math.cos(p), k = Math.sin(p), R = Math.cos(f), P = Math.sin(f), T = Math.tan(_ / 4), G = 4 / 3 * o * T, Q = 4 / 3 * s * T, ht = [e, t], X = [e + G * k, t - Q * b], fe = [n + G * P, r - Q * R], Jn = [n, r];
  if (X[0] = 2 * ht[0] - X[0], X[1] = 2 * ht[1] - X[1], l) return [X, fe, Jn].concat(d);
  {
    d = [X, fe, Jn].concat(d);
    const Y = [];
    for (let N = 0; N < d.length; N += 3) {
      const ee = je(d[N][0], d[N][1], u), Ae = je(d[N + 1][0], d[N + 1][1], u), Me = je(d[N + 2][0], d[N + 2][1], u);
      Y.push([ee[0], ee[1], Ae[0], Ae[1], Me[0], Me[1]]);
    }
    return Y;
  }
}
const gf = { randOffset: function(e, t) {
  return w(e, t);
}, randOffsetWithRange: function(e, t, n) {
  return It(e, t, n);
}, ellipse: function(e, t, n, r, o) {
  const s = io(n, r, o);
  return vn(e, t, o, s).opset;
}, doubleLineOps: function(e, t, n, r, o) {
  return de(e, t, n, r, o, !0);
} };
function ao(e, t, n, r, o) {
  return { type: "path", ops: de(e, t, n, r, o) };
}
function St(e, t, n) {
  const r = (e || []).length;
  if (r > 2) {
    const o = [];
    for (let s = 0; s < r - 1; s++) o.push(...de(e[s][0], e[s][1], e[s + 1][0], e[s + 1][1], n));
    return t && o.push(...de(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], n)), { type: "path", ops: o };
  }
  return r === 2 ? ao(e[0][0], e[0][1], e[1][0], e[1][1], n) : { type: "path", ops: [] };
}
function bf(e, t, n, r, o) {
  return (function(s, i) {
    return St(s, !0, i);
  })([[e, t], [e + n, t], [e + n, t + r], [e, t + r]], o);
}
function rr(e, t) {
  if (e.length) {
    const n = typeof e[0][0] == "number" ? [e] : e, r = gt(n[0], 1 * (1 + 0.2 * t.roughness), t), o = t.disableMultiStroke ? [] : gt(n[0], 1.5 * (1 + 0.22 * t.roughness), ar(t));
    for (let s = 1; s < n.length; s++) {
      const i = n[s];
      if (i.length) {
        const a = gt(i, 1 * (1 + 0.2 * t.roughness), t), c = t.disableMultiStroke ? [] : gt(i, 1.5 * (1 + 0.22 * t.roughness), ar(t));
        for (const l of a) l.op !== "move" && r.push(l);
        for (const l of c) l.op !== "move" && o.push(l);
      }
    }
    return { type: "path", ops: r.concat(o) };
  }
  return { type: "path", ops: [] };
}
function io(e, t, n) {
  const r = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), o = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * r)), s = 2 * Math.PI / o;
  let i = Math.abs(e / 2), a = Math.abs(t / 2);
  const c = 1 - n.curveFitting;
  return i += w(i * c, n), a += w(a * c, n), { increment: s, rx: i, ry: a };
}
function vn(e, t, n, r) {
  const [o, s] = ir(r.increment, e, t, r.rx, r.ry, 1, r.increment * It(0.1, It(0.4, 1, n), n), n);
  let i = Ot(o, null, n);
  if (!n.disableMultiStroke && n.roughness !== 0) {
    const [a] = ir(r.increment, e, t, r.rx, r.ry, 1.5, 0, n), c = Ot(a, null, n);
    i = i.concat(c);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: i } };
}
function or(e, t, n, r, o, s, i, a, c) {
  const l = e, u = t;
  let h = Math.abs(n / 2), d = Math.abs(r / 2);
  h += w(0.01 * h, c), d += w(0.01 * d, c);
  let p = o, f = s;
  for (; p < 0; ) p += 2 * Math.PI, f += 2 * Math.PI;
  f - p > 2 * Math.PI && (p = 0, f = 2 * Math.PI);
  const m = 2 * Math.PI / c.curveStepCount, g = Math.min(m / 2, (f - p) / 2), _ = cr(g, l, u, h, d, p, f, 1, c);
  if (!c.disableMultiStroke) {
    const b = cr(g, l, u, h, d, p, f, 1.5, c);
    _.push(...b);
  }
  return i && (a ? _.push(...de(l, u, l + h * Math.cos(p), u + d * Math.sin(p), c), ...de(l, u, l + h * Math.cos(f), u + d * Math.sin(f), c)) : _.push({ op: "lineTo", data: [l, u] }, { op: "lineTo", data: [l + h * Math.cos(p), u + d * Math.sin(p)] })), { type: "path", ops: _ };
}
function sr(e, t) {
  const n = oo(ro(Nn(e))), r = [];
  let o = [0, 0], s = [0, 0];
  for (const { key: i, data: a } of n) switch (i) {
    case "M":
      s = [a[0], a[1]], o = [a[0], a[1]];
      break;
    case "L":
      r.push(...de(s[0], s[1], a[0], a[1], t)), s = [a[0], a[1]];
      break;
    case "C": {
      const [c, l, u, h, d, p] = a;
      r.push(..._f(c, l, u, h, d, p, s, t)), s = [d, p];
      break;
    }
    case "Z":
      r.push(...de(s[0], s[1], o[0], o[1], t)), s = [o[0], o[1]];
  }
  return { type: "path", ops: r };
}
function sn(e, t) {
  const n = [];
  for (const r of e) if (r.length) {
    const o = t.maxRandomnessOffset || 0, s = r.length;
    if (s > 2) {
      n.push({ op: "move", data: [r[0][0] + w(o, t), r[0][1] + w(o, t)] });
      for (let i = 1; i < s; i++) n.push({ op: "lineTo", data: [r[i][0] + w(o, t), r[i][1] + w(o, t)] });
    }
  }
  return { type: "fillPath", ops: n };
}
function Ee(e, t) {
  return (function(n, r) {
    let o = n.fillStyle || "hachure";
    if (!j[o]) switch (o) {
      case "zigzag":
        j[o] || (j[o] = new lf(r));
        break;
      case "cross-hatch":
        j[o] || (j[o] = new uf(r));
        break;
      case "dots":
        j[o] || (j[o] = new df(r));
        break;
      case "dashed":
        j[o] || (j[o] = new pf(r));
        break;
      case "zigzag-line":
        j[o] || (j[o] = new hf(r));
        break;
      default:
        o = "hachure", j[o] || (j[o] = new Rn(r));
    }
    return j[o];
  })(t, gf).fillPolygons(e, t);
}
function ar(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function co(e) {
  return e.randomizer || (e.randomizer = new ff(e.seed || 0)), e.randomizer.next();
}
function It(e, t, n, r = 1) {
  return n.roughness * r * (co(n) * (t - e) + e);
}
function w(e, t, n = 1) {
  return It(-e, e, t, n);
}
function de(e, t, n, r, o, s = !1) {
  const i = s ? o.disableMultiStrokeFill : o.disableMultiStroke, a = xn(e, t, n, r, o, !0, !1);
  if (i) return a;
  const c = xn(e, t, n, r, o, !0, !0);
  return a.concat(c);
}
function xn(e, t, n, r, o, s, i) {
  const a = Math.pow(e - n, 2) + Math.pow(t - r, 2), c = Math.sqrt(a);
  let l = 1;
  l = c < 200 ? 1 : c > 500 ? 0.4 : -16668e-7 * c + 1.233334;
  let u = o.maxRandomnessOffset || 0;
  u * u * 100 > a && (u = c / 10);
  const h = u / 2, d = 0.2 + 0.2 * co(o);
  let p = o.bowing * o.maxRandomnessOffset * (r - t) / 200, f = o.bowing * o.maxRandomnessOffset * (e - n) / 200;
  p = w(p, o, l), f = w(f, o, l);
  const m = [], g = () => w(h, o, l), _ = () => w(u, o, l), b = o.preserveVertices;
  return i ? m.push({ op: "move", data: [e + (b ? 0 : g()), t + (b ? 0 : g())] }) : m.push({ op: "move", data: [e + (b ? 0 : w(u, o, l)), t + (b ? 0 : w(u, o, l))] }), i ? m.push({ op: "bcurveTo", data: [p + e + (n - e) * d + g(), f + t + (r - t) * d + g(), p + e + 2 * (n - e) * d + g(), f + t + 2 * (r - t) * d + g(), n + (b ? 0 : g()), r + (b ? 0 : g())] }) : m.push({ op: "bcurveTo", data: [p + e + (n - e) * d + _(), f + t + (r - t) * d + _(), p + e + 2 * (n - e) * d + _(), f + t + 2 * (r - t) * d + _(), n + (b ? 0 : _()), r + (b ? 0 : _())] }), m;
}
function gt(e, t, n) {
  if (!e.length) return [];
  const r = [];
  r.push([e[0][0] + w(t, n), e[0][1] + w(t, n)]), r.push([e[0][0] + w(t, n), e[0][1] + w(t, n)]);
  for (let o = 1; o < e.length; o++) r.push([e[o][0] + w(t, n), e[o][1] + w(t, n)]), o === e.length - 1 && r.push([e[o][0] + w(t, n), e[o][1] + w(t, n)]);
  return Ot(r, null, n);
}
function Ot(e, t, n) {
  const r = e.length, o = [];
  if (r > 3) {
    const s = [], i = 1 - n.curveTightness;
    o.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let a = 1; a + 2 < r; a++) {
      const c = e[a];
      s[0] = [c[0], c[1]], s[1] = [c[0] + (i * e[a + 1][0] - i * e[a - 1][0]) / 6, c[1] + (i * e[a + 1][1] - i * e[a - 1][1]) / 6], s[2] = [e[a + 1][0] + (i * e[a][0] - i * e[a + 2][0]) / 6, e[a + 1][1] + (i * e[a][1] - i * e[a + 2][1]) / 6], s[3] = [e[a + 1][0], e[a + 1][1]], o.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] });
    }
  } else r === 3 ? (o.push({ op: "move", data: [e[1][0], e[1][1]] }), o.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : r === 2 && o.push(...xn(e[0][0], e[0][1], e[1][0], e[1][1], n, !0, !0));
  return o;
}
function ir(e, t, n, r, o, s, i, a) {
  const c = [], l = [];
  if (a.roughness === 0) {
    e /= 4, l.push([t + r * Math.cos(-e), n + o * Math.sin(-e)]);
    for (let u = 0; u <= 2 * Math.PI; u += e) {
      const h = [t + r * Math.cos(u), n + o * Math.sin(u)];
      c.push(h), l.push(h);
    }
    l.push([t + r * Math.cos(0), n + o * Math.sin(0)]), l.push([t + r * Math.cos(e), n + o * Math.sin(e)]);
  } else {
    const u = w(0.5, a) - Math.PI / 2;
    l.push([w(s, a) + t + 0.9 * r * Math.cos(u - e), w(s, a) + n + 0.9 * o * Math.sin(u - e)]);
    const h = 2 * Math.PI + u - 0.01;
    for (let d = u; d < h; d += e) {
      const p = [w(s, a) + t + r * Math.cos(d), w(s, a) + n + o * Math.sin(d)];
      c.push(p), l.push(p);
    }
    l.push([w(s, a) + t + r * Math.cos(u + 2 * Math.PI + 0.5 * i), w(s, a) + n + o * Math.sin(u + 2 * Math.PI + 0.5 * i)]), l.push([w(s, a) + t + 0.98 * r * Math.cos(u + i), w(s, a) + n + 0.98 * o * Math.sin(u + i)]), l.push([w(s, a) + t + 0.9 * r * Math.cos(u + 0.5 * i), w(s, a) + n + 0.9 * o * Math.sin(u + 0.5 * i)]);
  }
  return [l, c];
}
function cr(e, t, n, r, o, s, i, a, c) {
  const l = s + w(0.1, c), u = [];
  u.push([w(a, c) + t + 0.9 * r * Math.cos(l - e), w(a, c) + n + 0.9 * o * Math.sin(l - e)]);
  for (let h = l; h <= i; h += e) u.push([w(a, c) + t + r * Math.cos(h), w(a, c) + n + o * Math.sin(h)]);
  return u.push([t + r * Math.cos(i), n + o * Math.sin(i)]), u.push([t + r * Math.cos(i), n + o * Math.sin(i)]), Ot(u, null, c);
}
function _f(e, t, n, r, o, s, i, a) {
  const c = [], l = [a.maxRandomnessOffset || 1, (a.maxRandomnessOffset || 1) + 0.3];
  let u = [0, 0];
  const h = a.disableMultiStroke ? 1 : 2, d = a.preserveVertices;
  for (let p = 0; p < h; p++) p === 0 ? c.push({ op: "move", data: [i[0], i[1]] }) : c.push({ op: "move", data: [i[0] + (d ? 0 : w(l[0], a)), i[1] + (d ? 0 : w(l[0], a))] }), u = d ? [o, s] : [o + w(l[p], a), s + w(l[p], a)], c.push({ op: "bcurveTo", data: [e + w(l[p], a), t + w(l[p], a), n + w(l[p], a), r + w(l[p], a), u[0], u[1]] });
  return c;
}
function Ve(e) {
  return [...e];
}
function lr(e, t = 0) {
  const n = e.length;
  if (n < 3) throw new Error("A curve must have at least three points.");
  const r = [];
  if (n === 3) r.push(Ve(e[0]), Ve(e[1]), Ve(e[2]), Ve(e[2]));
  else {
    const o = [];
    o.push(e[0], e[0]);
    for (let a = 1; a < e.length; a++) o.push(e[a]), a === e.length - 1 && o.push(e[a]);
    const s = [], i = 1 - t;
    r.push(Ve(o[0]));
    for (let a = 1; a + 2 < o.length; a++) {
      const c = o[a];
      s[0] = [c[0], c[1]], s[1] = [c[0] + (i * o[a + 1][0] - i * o[a - 1][0]) / 6, c[1] + (i * o[a + 1][1] - i * o[a - 1][1]) / 6], s[2] = [o[a + 1][0] + (i * o[a][0] - i * o[a + 2][0]) / 6, o[a + 1][1] + (i * o[a][1] - i * o[a + 2][1]) / 6], s[3] = [o[a + 1][0], o[a + 1][1]], r.push(s[1], s[2], s[3]);
    }
  }
  return r;
}
function $t(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function yf(e, t, n) {
  const r = $t(t, n);
  if (r === 0) return $t(e, t);
  let o = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
  return o = Math.max(0, Math.min(1, o)), $t(e, me(t, n, o));
}
function me(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function wn(e, t, n, r) {
  const o = r || [];
  if ((function(a, c) {
    const l = a[c + 0], u = a[c + 1], h = a[c + 2], d = a[c + 3];
    let p = 3 * u[0] - 2 * l[0] - d[0];
    p *= p;
    let f = 3 * u[1] - 2 * l[1] - d[1];
    f *= f;
    let m = 3 * h[0] - 2 * d[0] - l[0];
    m *= m;
    let g = 3 * h[1] - 2 * d[1] - l[1];
    return g *= g, p < m && (p = m), f < g && (f = g), p + f;
  })(e, t) < n) {
    const a = e[t + 0];
    o.length ? (s = o[o.length - 1], i = a, Math.sqrt($t(s, i)) > 1 && o.push(a)) : o.push(a), o.push(e[t + 3]);
  } else {
    const c = e[t + 0], l = e[t + 1], u = e[t + 2], h = e[t + 3], d = me(c, l, 0.5), p = me(l, u, 0.5), f = me(u, h, 0.5), m = me(d, p, 0.5), g = me(p, f, 0.5), _ = me(m, g, 0.5);
    wn([c, d, m, _], 0, n, o), wn([_, g, f, h], 0, n, o);
  }
  var s, i;
  return o;
}
function vf(e, t) {
  return Rt(e, 0, e.length, t);
}
function Rt(e, t, n, r, o) {
  const s = o || [], i = e[t], a = e[n - 1];
  let c = 0, l = 1;
  for (let u = t + 1; u < n - 1; ++u) {
    const h = yf(e[u], i, a);
    h > c && (c = h, l = u);
  }
  return Math.sqrt(c) > r ? (Rt(e, t, l + 1, r, s), Rt(e, l, n, r, s)) : (s.length || s.push(i), s.push(a)), s;
}
function an(e, t = 0.15, n) {
  const r = [], o = (e.length - 1) / 3;
  for (let s = 0; s < o; s++)
    wn(e, 3 * s, t, r);
  return n && n > 0 ? Rt(r, 0, r.length, n) : r;
}
const V = "none";
class Nt {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, n, r) {
    return { shape: t, sets: n || [], options: r || this.defaultOptions };
  }
  line(t, n, r, o, s) {
    const i = this._o(s);
    return this._d("line", [ao(t, n, r, o, i)], i);
  }
  rectangle(t, n, r, o, s) {
    const i = this._o(s), a = [], c = bf(t, n, r, o, i);
    if (i.fill) {
      const l = [[t, n], [t + r, n], [t + r, n + o], [t, n + o]];
      i.fillStyle === "solid" ? a.push(sn([l], i)) : a.push(Ee([l], i));
    }
    return i.stroke !== V && a.push(c), this._d("rectangle", a, i);
  }
  ellipse(t, n, r, o, s) {
    const i = this._o(s), a = [], c = io(r, o, i), l = vn(t, n, i, c);
    if (i.fill) if (i.fillStyle === "solid") {
      const u = vn(t, n, i, c).opset;
      u.type = "fillPath", a.push(u);
    } else a.push(Ee([l.estimatedPoints], i));
    return i.stroke !== V && a.push(l.opset), this._d("ellipse", a, i);
  }
  circle(t, n, r, o) {
    const s = this.ellipse(t, n, r, r, o);
    return s.shape = "circle", s;
  }
  linearPath(t, n) {
    const r = this._o(n);
    return this._d("linearPath", [St(t, !1, r)], r);
  }
  arc(t, n, r, o, s, i, a = !1, c) {
    const l = this._o(c), u = [], h = or(t, n, r, o, s, i, a, !0, l);
    if (a && l.fill) if (l.fillStyle === "solid") {
      const d = Object.assign({}, l);
      d.disableMultiStroke = !0;
      const p = or(t, n, r, o, s, i, !0, !1, d);
      p.type = "fillPath", u.push(p);
    } else u.push((function(d, p, f, m, g, _, b) {
      const k = d, R = p;
      let P = Math.abs(f / 2), T = Math.abs(m / 2);
      P += w(0.01 * P, b), T += w(0.01 * T, b);
      let G = g, Q = _;
      for (; G < 0; ) G += 2 * Math.PI, Q += 2 * Math.PI;
      Q - G > 2 * Math.PI && (G = 0, Q = 2 * Math.PI);
      const ht = (Q - G) / b.curveStepCount, X = [];
      for (let fe = G; fe <= Q; fe += ht) X.push([k + P * Math.cos(fe), R + T * Math.sin(fe)]);
      return X.push([k + P * Math.cos(Q), R + T * Math.sin(Q)]), X.push([k, R]), Ee([X], b);
    })(t, n, r, o, s, i, l));
    return l.stroke !== V && u.push(h), this._d("arc", u, l);
  }
  curve(t, n) {
    const r = this._o(n), o = [], s = rr(t, r);
    if (r.fill && r.fill !== V) if (r.fillStyle === "solid") {
      const i = rr(t, Object.assign(Object.assign({}, r), { disableMultiStroke: !0, roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(i.ops) });
    } else {
      const i = [], a = t;
      if (a.length) {
        const c = typeof a[0][0] == "number" ? [a] : a;
        for (const l of c) l.length < 3 ? i.push(...l) : l.length === 3 ? i.push(...an(lr([l[0], l[0], l[1], l[2]]), 10, (1 + r.roughness) / 2)) : i.push(...an(lr(l), 10, (1 + r.roughness) / 2));
      }
      i.length && o.push(Ee([i], r));
    }
    return r.stroke !== V && o.push(s), this._d("curve", o, r);
  }
  polygon(t, n) {
    const r = this._o(n), o = [], s = St(t, !0, r);
    return r.fill && (r.fillStyle === "solid" ? o.push(sn([t], r)) : o.push(Ee([t], r))), r.stroke !== V && o.push(s), this._d("polygon", o, r);
  }
  path(t, n) {
    const r = this._o(n), o = [];
    if (!t) return this._d("path", o, r);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = r.fill && r.fill !== "transparent" && r.fill !== V, i = r.stroke !== V, a = !!(r.simplification && r.simplification < 1), c = (function(u, h, d) {
      const p = oo(ro(Nn(u))), f = [];
      let m = [], g = [0, 0], _ = [];
      const b = () => {
        _.length >= 4 && m.push(...an(_, h)), _ = [];
      }, k = () => {
        b(), m.length && (f.push(m), m = []);
      };
      for (const { key: P, data: T } of p) switch (P) {
        case "M":
          k(), g = [T[0], T[1]], m.push(g);
          break;
        case "L":
          b(), m.push([T[0], T[1]]);
          break;
        case "C":
          if (!_.length) {
            const G = m.length ? m[m.length - 1] : g;
            _.push([G[0], G[1]]);
          }
          _.push([T[0], T[1]]), _.push([T[2], T[3]]), _.push([T[4], T[5]]);
          break;
        case "Z":
          b(), m.push([g[0], g[1]]);
      }
      if (k(), !d) return f;
      const R = [];
      for (const P of f) {
        const T = vf(P, d);
        T.length && R.push(T);
      }
      return R;
    })(t, 1, a ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), l = sr(t, r);
    if (s) if (r.fillStyle === "solid") if (c.length === 1) {
      const u = sr(t, Object.assign(Object.assign({}, r), { disableMultiStroke: !0, roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(u.ops) });
    } else o.push(sn(c, r));
    else o.push(Ee(c, r));
    return i && (a ? c.forEach(((u) => {
      o.push(St(u, !1, r));
    })) : o.push(l)), this._d("path", o, r);
  }
  opsToPath(t, n) {
    let r = "";
    for (const o of t.ops) {
      const s = typeof n == "number" && n >= 0 ? o.data.map(((i) => +i.toFixed(n))) : o.data;
      switch (o.op) {
        case "move":
          r += `M${s[0]} ${s[1]} `;
          break;
        case "bcurveTo":
          r += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
          break;
        case "lineTo":
          r += `L${s[0]} ${s[1]} `;
      }
    }
    return r.trim();
  }
  toPaths(t) {
    const n = t.sets || [], r = t.options || this.defaultOptions, o = [];
    for (const s of n) {
      let i = null;
      switch (s.type) {
        case "path":
          i = { d: this.opsToPath(s), stroke: r.stroke, strokeWidth: r.strokeWidth, fill: V };
          break;
        case "fillPath":
          i = { d: this.opsToPath(s), stroke: V, strokeWidth: 0, fill: r.fill || V };
          break;
        case "fillSketch":
          i = this.fillSketch(s, r);
      }
      i && o.push(i);
    }
    return o;
  }
  fillSketch(t, n) {
    let r = n.fillWeight;
    return r < 0 && (r = n.strokeWidth / 2), { d: this.opsToPath(t), stroke: n.fill || V, strokeWidth: r, fill: V };
  }
  _mergedShape(t) {
    return t.filter(((n, r) => r === 0 || n.op !== "move"));
  }
}
class xf {
  constructor(t, n) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Nt(n);
  }
  draw(t) {
    const n = t.sets || [], r = t.options || this.getDefaultOptions(), o = this.ctx, s = t.options.fixedDecimalPlaceDigits;
    for (const i of n) switch (i.type) {
      case "path":
        o.save(), o.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, o.lineWidth = r.strokeWidth, r.strokeLineDash && o.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (o.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(o, i, s), o.restore();
        break;
      case "fillPath": {
        o.save(), o.fillStyle = r.fill || "";
        const a = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(o, i, s, a), o.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(o, i, r);
    }
  }
  fillSketch(t, n, r) {
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = o, this._drawToContext(t, n, r.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, n, r, o = "nonzero") {
    t.beginPath();
    for (const s of n.ops) {
      const i = typeof r == "number" && r >= 0 ? s.data.map(((a) => +a.toFixed(r))) : s.data;
      switch (s.op) {
        case "move":
          t.moveTo(i[0], i[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
          break;
        case "lineTo":
          t.lineTo(i[0], i[1]);
      }
    }
    n.type === "fillPath" ? t.fill(o) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, n, r, o, s) {
    const i = this.gen.line(t, n, r, o, s);
    return this.draw(i), i;
  }
  rectangle(t, n, r, o, s) {
    const i = this.gen.rectangle(t, n, r, o, s);
    return this.draw(i), i;
  }
  ellipse(t, n, r, o, s) {
    const i = this.gen.ellipse(t, n, r, o, s);
    return this.draw(i), i;
  }
  circle(t, n, r, o) {
    const s = this.gen.circle(t, n, r, o);
    return this.draw(s), s;
  }
  linearPath(t, n) {
    const r = this.gen.linearPath(t, n);
    return this.draw(r), r;
  }
  polygon(t, n) {
    const r = this.gen.polygon(t, n);
    return this.draw(r), r;
  }
  arc(t, n, r, o, s, i, a = !1, c) {
    const l = this.gen.arc(t, n, r, o, s, i, a, c);
    return this.draw(l), l;
  }
  curve(t, n) {
    const r = this.gen.curve(t, n);
    return this.draw(r), r;
  }
  path(t, n) {
    const r = this.gen.path(t, n);
    return this.draw(r), r;
  }
}
const bt = "http://www.w3.org/2000/svg";
class wf {
  constructor(t, n) {
    this.svg = t, this.gen = new Nt(n);
  }
  draw(t) {
    const n = t.sets || [], r = t.options || this.getDefaultOptions(), o = this.svg.ownerDocument || window.document, s = o.createElementNS(bt, "g"), i = t.options.fixedDecimalPlaceDigits;
    for (const a of n) {
      let c = null;
      switch (a.type) {
        case "path":
          c = o.createElementNS(bt, "path"), c.setAttribute("d", this.opsToPath(a, i)), c.setAttribute("stroke", r.stroke), c.setAttribute("stroke-width", r.strokeWidth + ""), c.setAttribute("fill", "none"), r.strokeLineDash && c.setAttribute("stroke-dasharray", r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && c.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
          break;
        case "fillPath":
          c = o.createElementNS(bt, "path"), c.setAttribute("d", this.opsToPath(a, i)), c.setAttribute("stroke", "none"), c.setAttribute("stroke-width", "0"), c.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || c.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          c = this.fillSketch(o, a, r);
      }
      c && s.appendChild(c);
    }
    return s;
  }
  fillSketch(t, n, r) {
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const s = t.createElementNS(bt, "path");
    return s.setAttribute("d", this.opsToPath(n, r.fixedDecimalPlaceDigits)), s.setAttribute("stroke", r.fill || ""), s.setAttribute("stroke-width", o + ""), s.setAttribute("fill", "none"), r.fillLineDash && s.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && s.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), s;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, n) {
    return this.gen.opsToPath(t, n);
  }
  line(t, n, r, o, s) {
    const i = this.gen.line(t, n, r, o, s);
    return this.draw(i);
  }
  rectangle(t, n, r, o, s) {
    const i = this.gen.rectangle(t, n, r, o, s);
    return this.draw(i);
  }
  ellipse(t, n, r, o, s) {
    const i = this.gen.ellipse(t, n, r, o, s);
    return this.draw(i);
  }
  circle(t, n, r, o) {
    const s = this.gen.circle(t, n, r, o);
    return this.draw(s);
  }
  linearPath(t, n) {
    const r = this.gen.linearPath(t, n);
    return this.draw(r);
  }
  polygon(t, n) {
    const r = this.gen.polygon(t, n);
    return this.draw(r);
  }
  arc(t, n, r, o, s, i, a = !1, c) {
    const l = this.gen.arc(t, n, r, o, s, i, a, c);
    return this.draw(l);
  }
  curve(t, n) {
    const r = this.gen.curve(t, n);
    return this.draw(r);
  }
  path(t, n) {
    const r = this.gen.path(t, n);
    return this.draw(r);
  }
}
var kf = { canvas: (e, t) => new xf(e, t), svg: (e, t) => new wf(e, t), generator: (e) => new Nt(e), newSeed: () => Nt.newSeed() };
const ur = "data-wp-animations";
function Sf() {
  if (document.head.querySelector(`[${ur}]`)) return;
  const e = document.createElement("style");
  e.setAttribute(ur, "true"), e.textContent = `
    @keyframes wp-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes wp-slide-left {
      from { transform: translateX(-30px) rotate(0deg); opacity: 0; }
      to { transform: translateX(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-right {
      from { transform: translateX(30px) rotate(0deg); opacity: 0; }
      to { transform: translateX(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-up {
      from { transform: translateY(30px) rotate(0deg); opacity: 0; }
      to { transform: translateY(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-down {
      from { transform: translateY(-30px) rotate(0deg); opacity: 0; }
      to { transform: translateY(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-bounce {
      0% { transform: scale(0.3) rotate(0deg); opacity: 0; }
      50% { transform: scale(1.1) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
      70% { transform: scale(0.95) rotate(var(--wp-final-rot, 0deg)); }
      100% { transform: scale(1) rotate(var(--wp-final-rot, 0deg)); }
    }
    @keyframes wp-zoom {
      from { transform: scale(0) rotate(0deg); opacity: 0; }
      to { transform: scale(1) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    /* rotate effect — 720deg(2회전) 후 final rotate. */
    @keyframes wp-rotate {
      from { transform: rotate(0deg); opacity: 0; }
      to { transform: rotate(calc(720deg + var(--wp-final-rot, 0deg))); opacity: 1; }
    }
  `, document.head.appendChild(e);
}
function Qe(e, t, n) {
  if (!t || t.kind === "none" || Yr() !== "replay") return;
  const r = Math.max(50, t.durationMs || 400), o = Math.max(0, t.delayMs || 0);
  e.style.transformBox = "fill-box", e.style.transformOrigin = "center", e.style.setProperty("--wp-final-rot", `${n}deg`), e.style.animation = `wp-${t.kind} ${r}ms ease-out ${o}ms backwards`;
  const s = () => {
    e.style.animation = "", e.style.transformBox = "", e.style.transformOrigin = "", e.removeEventListener("animationend", s), e.removeEventListener("animationcancel", s);
  };
  e.addEventListener("animationend", s), e.addEventListener("animationcancel", s);
}
const Dt = "http://www.w3.org/2000/svg", lo = "data-annotation-text", dr = "data-annotation-arrow", uo = "data-annotation-shape", pr = "data-annotation-freedraw", M = {
  host: null,
  svg: null,
  roughSvg: null,
  unsubscribe: null,
  unsubscribeMode: null
};
function Dn(e) {
  var t;
  return ((t = e.closest) == null ? void 0 : t.call(e, '[data-manuscript="ui"]')) !== null;
}
function $f(e, t) {
  try {
    const n = Array.from(t.querySelectorAll(e.cssSelector)), r = [];
    for (const o of n)
      if (!Dn(o) && (r.push(o), r.length > 1))
        return null;
    return r[0] ?? null;
  } catch {
    return null;
  }
}
function Af(e, t) {
  return !e || !e.text ? null : (e.parentSelector ? Array.from(t.querySelectorAll(`${e.parentSelector} ${e.tagName}`)) : Array.from(t.querySelectorAll(e.tagName))).find(
    (r) => !Dn(r) && (r.textContent ?? "").trim().includes(e.text)
  ) ?? null;
}
function Mf(e, t) {
  var a;
  if (!e || typeof t.elementFromPoint != "function") return null;
  const n = t.elementFromPoint(
    e.x + Math.floor(e.width / 2),
    e.y + Math.floor(e.height / 2)
  );
  if (!(n instanceof HTMLElement) || Dn(n)) return null;
  const r = n.getBoundingClientRect();
  if (!(Math.abs(r.width - e.width) < e.width * 0.5 && Math.abs(r.height - e.height) < e.height * 0.5)) return null;
  if (e.nearbyText.length === 0) return n;
  const s = (((a = n.parentElement) == null ? void 0 : a.textContent) ?? "").trim();
  return e.nearbyText.some((c) => s.includes(c)) ? n : null;
}
function po(e) {
  var t;
  return ((t = kn(e)) == null ? void 0 : t.el) ?? null;
}
function kn(e) {
  const t = ho(e.framePath);
  if (!t) return null;
  const n = $f(e.layer1, t);
  if (n) return { el: n, layer: 1 };
  const r = Af(e.layer2, t);
  if (r) return { el: r, layer: 2 };
  const o = Mf(e.layer3, t);
  return o ? { el: o, layer: 3 } : null;
}
function ho(e) {
  if (!e || e.length === 0) return document;
  if (typeof window > "u") return null;
  let t = window;
  for (const n of e) {
    const r = t.frames[n.index];
    if (!r) return null;
    t = r;
  }
  try {
    return t.document;
  } catch {
    return null;
  }
}
function J() {
  const e = pe();
  if (!e || !e.selectors) return null;
  try {
    const t = po(e.selectors);
    return t ? t.getBoundingClientRect() : null;
  } catch {
    return null;
  }
}
function Ef(e, t) {
  return e.anchorOffset && t ? { x: t.left + e.anchorOffset.x, y: t.top + e.anchorOffset.y } : e.position;
}
function jt(e, t) {
  return e.boundsAnchorOffset && t ? { x: t.left + e.boundsAnchorOffset.x, y: t.top + e.boundsAnchorOffset.y } : { x: e.bounds.x, y: e.bounds.y };
}
function Lf(e, t) {
  const n = e.fromAnchorOffset && t ? { x: t.left + e.fromAnchorOffset.x, y: t.top + e.fromAnchorOffset.y } : e.from, r = e.toAnchorOffset && t ? { x: t.left + e.toAnchorOffset.x, y: t.top + e.toAnchorOffset.y } : e.to;
  return { from: n, to: r };
}
function Vt(e, t) {
  return e.pointsAnchorOffset && t && e.pointsAnchorOffset.length === e.points.length ? e.pointsAnchorOffset.map((n) => ({
    x: t.left + n.x,
    y: t.top + n.y
  })) : e.points;
}
function Tf(e, t) {
  const { svg: n, roughSvg: r } = M;
  if (!n || !r) return;
  const o = Pf(e.id), { from: s, to: i } = Lf(e, t);
  fo(
    e,
    (a) => r.line(s.x, s.y, i.x, i.y, {
      roughness: 1.5,
      bowing: 1,
      seed: o,
      ...a
    })
  ), Cf(e, s, i, o + 1);
}
function Cf(e, t, n, r) {
  const { roughSvg: o } = M;
  if (!o) return;
  const s = Math.atan2(n.y - t.y, n.x - t.x), i = 14 + e.strokeWidth * 2, a = Math.PI / 7, c = n.x - i * Math.cos(s - a), l = n.y - i * Math.sin(s - a), u = n.x - i * Math.cos(s + a), h = n.y - i * Math.sin(s + a), d = `M ${c} ${l} L ${n.x} ${n.y} L ${u} ${h}`;
  fo(
    e,
    (p) => o.path(d, {
      roughness: 1.5,
      bowing: 1,
      seed: r,
      ...p
    })
  );
}
function fo(e, t) {
  const { svg: n } = M;
  if (!n) return;
  const r = t({ stroke: "#ffffff", strokeWidth: e.strokeWidth + 4 });
  r.setAttribute(dr, e.id), Qe(r, e.entryAnimation, 0), n.appendChild(r);
  const o = t({ stroke: e.color, strokeWidth: e.strokeWidth });
  o.setAttribute(dr, e.id), Qe(o, e.entryAnimation, 0), n.appendChild(o);
}
function Pf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = t * 31 + e.charCodeAt(n) | 0;
  return Math.abs(t % 1e5);
}
function mo(e, t, n) {
  const r = Math.floor(e / 60 % 6), o = e / 60 - Math.floor(e / 60), s = n * (1 - t), i = n * (1 - o * t), a = n * (1 - (1 - o) * t);
  let c = 0, l = 0, u = 0;
  switch (r) {
    case 0:
      c = n, l = a, u = s;
      break;
    case 1:
      c = i, l = n, u = s;
      break;
    case 2:
      c = s, l = n, u = a;
      break;
    case 3:
      c = s, l = i, u = n;
      break;
    case 4:
      c = a, l = s, u = n;
      break;
    case 5:
      c = n, l = s, u = i;
      break;
  }
  return [Math.round(c * 255), Math.round(l * 255), Math.round(u * 255)];
}
function go(e, t, n) {
  const r = e / 255, o = t / 255, s = n / 255, i = Math.max(r, o, s), a = Math.min(r, o, s), c = i - a;
  let l = 0;
  return c !== 0 && (i === r ? l = (o - s) / c % 6 : i === o ? l = (s - r) / c + 2 : l = (r - o) / c + 4, l *= 60, l < 0 && (l += 360)), { h: l, s: i === 0 ? 0 : c / i, v: i };
}
function bo(e, t, n) {
  return "#" + [e, t, n].map((r) => r.toString(16).padStart(2, "0")).join("");
}
function _o(e) {
  let t = e.trim();
  if (!t.startsWith("#")) return { h: 0, s: 1, v: 1 };
  if (t = t.slice(1), t.length === 3 && (t = t.split("").map((s) => s + s).join("")), t.length !== 6) return { h: 0, s: 1, v: 1 };
  const n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), o = parseInt(t.slice(4, 6), 16);
  return [n, r, o].some((s) => !Number.isFinite(s)) ? { h: 0, s: 1, v: 1 } : go(n, r, o);
}
function cn(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.min(255, Math.round(t))) : 0;
}
function hr(e, t) {
  let n = !1;
  e.addEventListener("mousedown", (r) => {
    n = !0, t(r), r.preventDefault();
  }), document.addEventListener("mousemove", (r) => {
    n && t(r);
  }), document.addEventListener("mouseup", () => {
    n = !1;
  });
}
async function If(e) {
  let t;
  try {
    const n = window.top;
    t = n == null ? void 0 : n.EyeDropper;
  } catch {
  }
  if (t || (t = window.EyeDropper), !t) {
    console.info("[manuscript] EyeDropper API not available");
    return;
  }
  try {
    const n = await new t().open();
    e(n.sRGBHex);
  } catch {
  }
}
const Of = `/* ─────────────────────────────────────────────────────────────
   Manuscript — Design tokens
   3 palettes (A Ink, B Graphite, C Sepia) + shared accents + type scale
   All colors authored in oklch for perceptual harmony.
   ───────────────────────────────────────────────────────────── */

:root {
  /* Type — Pretendard Variable single family, weight scale */
  --ff-sans: 'Pretendard Variable', Pretendard, -apple-system, 'Apple SD Gothic Neo',
             'Helvetica Neue', Arial, sans-serif;
  --ff-mono: ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  /* Classical serif — reserved for the brand wordmark. Renaissance Garamond
     reinforces the manuscript/manus-scriptus etymology. */
  --ff-serif: 'EB Garamond', 'Apple Garamond', Garamond, 'Times New Roman', serif;

  /* Scale (px) — Floating panel 작업 모드 기준. compact density.
     Body 14px가 최소; B2B 차분 톤에서 13/14가 표준.                  */
  --fs-display: 28px;  --lh-display: 1.2;  --fw-display: 600;
  --fs-h1:      20px;  --lh-h1:      1.3;  --fw-h1:      600;
  --fs-h2:      16px;  --lh-h2:      1.35; --fw-h2:      600;
  --fs-body:    14px;  --lh-body:    1.5;  --fw-body:    400;
  --fs-strong:  14px;  --lh-strong:  1.5;  --fw-strong:  500;
  --fs-small:   12px;  --lh-small:   1.45; --fw-small:   400;
  --fs-cap:     11px;  --lh-cap:     1.3;  --fw-cap:     600;
  --ls-cap:     0.08em;

  /* Radius + spacing — soft, document-like */
  --r-xs: 4px; --r-sm: 6px; --r-md: 10px; --r-lg: 14px; --r-pill: 999px;
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.04), 0 1px 1px rgb(0 0 0 / 0.03);
  --shadow-md: 0 2px 6px rgb(0 0 0 / 0.06), 0 1px 2px rgb(0 0 0 / 0.04);
  --shadow-lg: 0 12px 28px rgb(0 0 0 / 0.10), 0 4px 8px rgb(0 0 0 / 0.05);
  /* Apple-leaning layered shadow for elevated cards (active step, etc.).
     Per-palette overrides may tune this in tokens.css. */
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.04),
                 0 4px 10px rgb(0 0 0 / 0.05),
                 0 12px 24px rgb(0 0 0 / 0.06);

  /* ───── Functional accents (shared across all palettes) ───── */
  --c-success: oklch(0.52 0.09 150);
  --c-warning: oklch(0.66 0.10 75);
  --c-error:   oklch(0.52 0.14 27);
  --c-info:    oklch(0.50 0.08 245);

  /* ───── PALETTE A — INK (default) ─────
     Deep navy on warm paper. Most B2B-standard, archival voice. */
  --c-bg:        oklch(0.985 0.005 80);
  --c-surface:   oklch(1     0     0);
  --c-surface-2: oklch(0.965 0.006 80);
  --c-text:      oklch(0.18  0.015 250);
  --c-text-mute: oklch(0.45  0.012 250);
  --c-text-soft: oklch(0.62  0.010 250);
  --c-border:    oklch(0.91  0.008 250);
  --c-border-strong: oklch(0.82 0.012 250);
  --c-primary:   oklch(0.30  0.045 250);
  --c-primary-h: oklch(0.22  0.050 250);
  --c-primary-fg: oklch(0.985 0.003 80);
  --c-tint:      oklch(0.93  0.020 250); /* selected step bg */
  --c-focus:     oklch(0.55  0.10  250); /* focus ring */
}

/* ───── PALETTE B — GRAPHITE ─────
   Near-black on bone. Calmest, monochrome. Maximum trust signal. */
[data-palette="graphite"] {
  --c-bg:        oklch(0.97  0.004 70);
  --c-surface:   oklch(0.995 0.003 70);
  --c-surface-2: oklch(0.94  0.005 70);
  --c-text:      oklch(0.16  0.005 60);
  --c-text-mute: oklch(0.46  0.006 60);
  --c-text-soft: oklch(0.62  0.005 60);
  --c-border:    oklch(0.90  0.006 70);
  --c-border-strong: oklch(0.80 0.008 70);
  --c-primary:   oklch(0.22  0.008 60);
  --c-primary-h: oklch(0.12  0     0);
  --c-primary-fg: oklch(0.98  0.003 70);
  --c-tint:      oklch(0.93  0.006 70);
  --c-focus:     oklch(0.50  0.010 60);
}

/* ───── PALETTE C — SEPIA ─────
   Parchment + oxblood. Strongest manuscript metaphor. */
[data-palette="sepia"] {
  --c-bg:        oklch(0.96  0.013 75);
  --c-surface:   oklch(0.99  0.007 80);
  --c-surface-2: oklch(0.935 0.018 75);
  --c-text:      oklch(0.22  0.020 40);
  --c-text-mute: oklch(0.48  0.022 40);
  --c-text-soft: oklch(0.62  0.018 50);
  --c-border:    oklch(0.88  0.020 65);
  --c-border-strong: oklch(0.78 0.025 60);
  --c-primary:   oklch(0.35  0.085 27);
  --c-primary-h: oklch(0.28  0.090 27);
  --c-primary-fg: oklch(0.985 0.008 80);
  --c-tint:      oklch(0.92  0.025 60);
  --c-focus:     oklch(0.50  0.10  30);
}

/* ───── PALETTE D — STUDIO ─────
   Cool snow + Apple-leaning blue. Subtle borders, depth via shadow.
   chroma stays within doctrine (≤0.09). */
[data-palette="studio"] {
  --c-bg:        oklch(0.985 0.005 240);
  --c-surface:   oklch(1     0     0);
  --c-surface-2: oklch(0.965 0.006 240);
  --c-text:      oklch(0.20  0.020 240);
  --c-text-mute: oklch(0.50  0.015 240);
  --c-text-soft: oklch(0.66  0.010 240);
  --c-border:    oklch(0.92  0.008 240);
  --c-border-strong: oklch(0.84 0.010 240);
  --c-primary:   oklch(0.48  0.085 245);
  --c-primary-h: oklch(0.40  0.090 245);
  --c-primary-fg: oklch(0.99  0.003 240);
  --c-tint:      oklch(0.94  0.025 245);
  --c-focus:     oklch(0.60  0.13  245);

  /* Elevated-card shadow — softer + more layered than the default --shadow-md.
     Used on the active step in the floating panel. */
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.04),
                 0 4px 10px rgb(0 0 0 / 0.05),
                 0 12px 24px rgb(0 0 0 / 0.06);
}

/* ───── PALETTE E — STUDIO-DARK ─────
   Cool slate dark, mirrors PALETTE D STUDIO. See docs/design/dark-mode-design.md §4.1.
   Chroma ≤ 0.09 doctrine maintained (focus only allowed slight excess at 0.13). */
[data-palette="studio-dark"] {
  --c-bg:        oklch(0.16  0.012 245);
  --c-surface:   oklch(0.22  0.014 245);
  --c-surface-2: oklch(0.19  0.012 245);
  --c-text:      oklch(0.97  0.003 245);
  --c-text-mute: oklch(0.78  0.006 245);
  --c-text-soft: oklch(0.62  0.008 245);
  --c-border:    oklch(0.32  0.012 245);
  --c-border-strong: oklch(0.42 0.014 245);
  --c-primary:   oklch(0.70  0.09  245);
  --c-primary-h: oklch(0.78  0.09  245);
  --c-primary-fg: oklch(0.14  0.020 245);
  --c-tint:      oklch(0.32  0.045 245);
  --c-focus:     oklch(0.74  0.13  245);
}

/* ───── PALETTE F — INK-DARK ─────
   Warm-on-cool dark, mirrors PALETTE A INK. docs/design/dark-mode-design.md §4.2.
   Absorbs \`08.DARK-MODE-TOKENS.md\` §1 (spotlight-editor) and §2 (launcher pill) tones. */
[data-palette="ink-dark"] {
  --c-bg:        oklch(0.14  0.015 250);
  --c-surface:   oklch(0.20  0.018 250);
  --c-surface-2: oklch(0.17  0.016 250);
  --c-text:      oklch(0.98  0.003  80);
  --c-text-mute: oklch(0.76  0.006  80);
  --c-text-soft: oklch(0.60  0.008  80);
  --c-border:    oklch(0.30  0.014 250);
  --c-border-strong: oklch(0.40 0.016 250);
  --c-primary:   oklch(0.66  0.06  250);
  --c-primary-h: oklch(0.74  0.07  250);
  --c-primary-fg: oklch(0.14  0.018 250);
  --c-tint:      oklch(0.30  0.05  250);
  --c-focus:     oklch(0.70  0.10  250);
}

/* ───── Dark-palette shared overrides ─────
   Shadows: alpha ~4× because black-on-black shadow is weak; pair with
   surface-lightness steps (--c-bg < --c-surface-2 < --c-surface) for elevation.
   Functional accents: lightness ↑ for contrast on dark surface (L≈0.22). */
[data-palette$="-dark"] {
  --shadow-sm:   0 1px 2px  rgb(0 0 0 / 0.40);
  --shadow-md:   0 2px 6px  rgb(0 0 0 / 0.45), 0 1px 2px rgb(0 0 0 / 0.35);
  --shadow-lg:   0 12px 28px rgb(0 0 0 / 0.55), 0 4px 8px rgb(0 0 0 / 0.40);
  --shadow-card: 0 1px 2px  rgb(0 0 0 / 0.35),
                 0 4px 10px rgb(0 0 0 / 0.40),
                 0 12px 24px rgb(0 0 0 / 0.50);

  --c-success: oklch(0.66 0.10 150);
  --c-warning: oklch(0.78 0.11  75);
  --c-error:   oklch(0.66 0.15  27);
  --c-info:    oklch(0.66 0.09 245);
}

/* ───── Annotation color sets ─────
   Two curated 8-color sets the user picks from when authoring annotations.
   These are independent from the UI palette so the shell can be calm
   while annotations stay expressive (or both can be calm together).      */
:root {
  /* Vibrant — figma-style. Default for "강조 우선" 사용자. */
  --ann-vib-1: oklch(0.18 0.005 250);   /* ink black */
  --ann-vib-2: oklch(0.99 0     0);     /* paper white */
  --ann-vib-3: oklch(0.62 0.22  27);    /* red */
  --ann-vib-4: oklch(0.70 0.18 350);    /* pink */
  --ann-vib-5: oklch(0.60 0.16 145);    /* green */
  --ann-vib-6: oklch(0.55 0.18 250);    /* blue */
  --ann-vib-7: oklch(0.82 0.15  90);    /* yellow */
  --ann-vib-8: oklch(0.50 0.18 290);    /* purple */

  /* Muted — same 8 hues, chroma halved. B2B-friendly default. */
  --ann-mut-1: oklch(0.20 0.008 250);
  --ann-mut-2: oklch(0.99 0     0);
  --ann-mut-3: oklch(0.45 0.10  27);
  --ann-mut-4: oklch(0.50 0.09 350);
  --ann-mut-5: oklch(0.45 0.08 145);
  --ann-mut-6: oklch(0.42 0.09 250);
  --ann-mut-7: oklch(0.62 0.10  75);
  --ann-mut-8: oklch(0.42 0.08 290);
}

/* ───── Base ───── */
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--ff-sans);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--c-text);
  background: var(--c-bg);
  font-feature-settings: 'ss03', 'cv01';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* { box-sizing: border-box; }
`;
function it() {
  return Of.replace(/:root\s*\{/g, ":host {").replace(/\[data-palette([^\]]*)\]\s*\{/g, ":host([data-palette$1]) {");
}
const yo = "studio", Rf = [
  "studio",
  "ink",
  "graphite",
  "sepia",
  "studio-dark",
  "ink-dark"
];
function vo(e) {
  return typeof e == "string" && Rf.includes(e);
}
function Nf(e) {
  return e.endsWith("-dark");
}
let Xe = null;
const Sn = /* @__PURE__ */ new Set();
let fr = !1;
async function Df() {
  if (Xe) return Xe;
  try {
    const e = await W().get(U.palette);
    if (vo(e))
      return Xe = e, e;
  } catch {
  }
  return yo;
}
function Bf() {
  return Xe ?? yo;
}
function qf(e) {
  Sn.add(new WeakRef(e)), e.setAttribute("data-palette", Bf()), Df().then((t) => {
    e.isConnected && e.setAttribute("data-palette", t);
  }), Ff();
}
function Ff() {
  if (!fr) {
    fr = !0;
    try {
      W().subscribe([U.palette], (e, t) => {
        vo(t) && (Xe = t, zf(t));
      });
    } catch {
    }
  }
}
function zf(e) {
  for (const t of [...Sn]) {
    const n = t.deref();
    n && n.isConnected ? (n.setAttribute("data-palette", e), Hf(n, e)) : Sn.delete(t);
  }
}
function Hf(e, t) {
  var r;
  const n = (r = e.shadowRoot) == null ? void 0 : r.querySelector('[data-region="palette-toggle"]');
  n && n.setAttribute("aria-pressed", Nf(t) ? "true" : "false");
}
const Wf = 140, Uf = 140;
function jf() {
  return `
    ${it()}
    :host {
      display: block;
      font-family: var(--ff-sans);
      color: var(--c-text);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .picker {
      width: 240px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .top { display: flex; gap: 10px; }
    .sv {
      position: relative;
      flex: 1;
      height: ${Wf}px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
      cursor: crosshair;
      overflow: hidden;
      user-select: none;
    }
    .sv-base { position: absolute; inset: 0; }
    .sv-white {
      position: absolute; inset: 0;
      background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
    }
    .sv-black {
      position: absolute; inset: 0;
      background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
    }
    .sv-cursor {
      position: absolute;
      width: 12px; height: 12px;
      border: 1.5px solid #ffffff;
      border-radius: 999px;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 1px rgb(0 0 0 / 0.35);
      pointer-events: none;
    }

    .hue {
      position: relative;
      width: 12px;
      height: ${Uf}px;
      border-radius: 999px;
      border: 1px solid var(--c-border);
      cursor: pointer;
      background: linear-gradient(
        to bottom,
        #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%
      );
      user-select: none;
    }
    .hue-cursor {
      position: absolute;
      left: 50%;
      width: 18px; height: 8px;
      border-radius: 4px;
      background: var(--c-surface);
      border: 1.5px solid var(--c-text);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.12);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  `;
}
function Vf() {
  return `
    .actions { display: flex; align-items: center; gap: 6px; }
    .icon-btn {
      width: 28px; height: 28px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
      background: var(--c-surface);
      color: var(--c-text);
      cursor: pointer;
      padding: 0;
      display: grid;
      place-items: center;
      transition: border-color 0.12s ease;
    }
    .icon-btn:hover { border-color: var(--c-border-strong); }
    .icon-btn:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .icon-btn svg { display: block; }
    .preview {
      flex: 1;
      height: 28px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border-strong);
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.12);
    }
    .confirm {
      border-color: var(--c-text);
      background: var(--c-text);
      color: var(--c-surface);
    }
    .confirm:hover {
      background: var(--c-primary);
      border-color: var(--c-primary);
      color: var(--c-primary-fg);
    }

    .rgb-wrap { display: flex; flex-direction: column; gap: 4px; }
    .rgb-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .modes { display: inline-flex; gap: 8px; }
    .modes .active { color: var(--c-text); }
    .hex-display {
      font-family: var(--ff-mono);
      font-size: 10px;
      letter-spacing: 0;
      color: var(--c-text-mute);
      text-transform: none;
    }
    .rgb { display: flex; gap: 8px; }
    .rgb-cell {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .rgb-cell input {
      width: 100%;
      height: 28px;
      padding: 0 8px;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      font-family: var(--ff-mono);
      font-size: 12px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      text-align: center;
      line-height: 1;
      appearance: textfield;
    }
    .rgb-cell input:focus {
      outline: none;
      border-color: var(--c-focus);
    }
    .rgb-cell input::-webkit-outer-spin-button,
    .rgb-cell input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .rgb-cell label {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.10em;
      color: var(--c-text-soft);
      text-transform: uppercase;
      line-height: 1;
    }

    .recent { display: flex; flex-direction: column; gap: 6px; }
    .recent-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .recent-list { display: flex; gap: 4px; flex-wrap: wrap; }
    .recent-swatch {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      border: 1px solid var(--c-border);
      cursor: pointer;
      padding: 0;
      background: transparent;
    }
    .recent-swatch:hover { border-color: var(--c-border-strong); }
    .recent-swatch:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 1px;
    }
  `;
}
function Gf() {
  return [jf(), Vf()].join(`
`);
}
function xo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Yf(e) {
  return xo(e).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function H(e) {
  return Yf(e);
}
function Xf() {
  return `
    <style>${Gf()}</style>
    <div class="picker" role="dialog" aria-label="Custom color picker">
      ${Kf()}
      ${Zf()}
      ${Jf()}
      ${Qf()}
    </div>
  `;
}
function Kf() {
  return `
    <div class="top">
      <div class="sv" data-region="sv">
        <div class="sv-base" data-region="sv-base"></div>
        <div class="sv-white"></div>
        <div class="sv-black"></div>
        <div class="sv-cursor" data-region="sv-cursor"></div>
      </div>
      <div class="hue" data-region="hue">
        <div class="hue-cursor" data-region="hue-cursor"></div>
      </div>
    </div>
  `;
}
function Zf() {
  return `
    <div class="actions">
      <button type="button" class="icon-btn" data-action="eyedrop" title="Pick from page" aria-label="Eyedropper">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <g transform="rotate(45 8 8)">
            <path d="M 6 2 a 2 1.5 0 0 1 4 0 v 1.5 h -0.4 v 1 h 0.4 v 5.4 l -2 4.6 l -2 -4.6 v -5.4 h 0.4 v -1 h -0.4 z"/>
          </g>
        </svg>
      </button>
      <div class="preview" data-region="preview"></div>
      <button type="button" class="icon-btn confirm" data-action="confirm" title="Apply" aria-label="Confirm and apply color">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M 3.5 8.5 L 6.5 11.5 L 12.5 5"/>
        </svg>
      </button>
    </div>
  `;
}
function Jf() {
  return `
    <div class="rgb-wrap">
      <div class="rgb-head">
        <span class="modes">
          <span class="active">RGB</span>
          <span>HEX</span>
          <span>HSL</span>
        </span>
        <span class="hex-display" data-region="hex">#000000</span>
      </div>
      <div class="rgb">
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="r" aria-label="Red" />
          <label>R</label>
        </div>
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="g" aria-label="Green" />
          <label>G</label>
        </div>
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="b" aria-label="Blue" />
          <label>B</label>
        </div>
      </div>
    </div>
  `;
}
function Qf() {
  var s, i;
  const e = D(), t = ((s = e == null ? void 0 : e.customColors) == null ? void 0 : s.text) ?? [], n = ((i = e == null ? void 0 : e.customColors) == null ? void 0 : i.background) ?? [], r = Array.from(/* @__PURE__ */ new Set([...t, ...n])).slice(-7);
  return r.length === 0 ? "" : `
    <div class="recent" data-region="recent">
      <span class="recent-label">Recent</span>
      <div class="recent-list">${r.map(
    (a) => `<button type="button" class="recent-swatch" data-action="recent" data-color="${H(a)}" style="background: ${H(a)}" aria-label="Use ${H(a)}" title="${H(a)}"></button>`
  ).join("")}</div>
    </div>
  `;
}
function em(e, t) {
  const n = t.getBoundingClientRect();
  e.style.top = "0px", e.style.left = "0px";
  const r = e.getBoundingClientRect();
  let o = n.bottom + 8;
  o + r.height > window.innerHeight - 8 && (o = n.top - r.height - 8);
  let s = n.left;
  s + r.width > window.innerWidth - 8 && (s = window.innerWidth - r.width - 8), e.style.top = `${Math.max(8, o)}px`, e.style.left = `${Math.max(8, s)}px`;
}
function Ue() {
  const e = document.createElement("div");
  e.setAttribute("data-manuscript", "ui"), qf(e);
  const t = e.attachShadow({ mode: "open" });
  return { host: e, shadow: t };
}
let K = null, O = null, le = 0, we = 1, ke = 1, ue = null;
function tm(e) {
  Se(), ue = e.onConfirm;
  const t = _o(e.initialColor);
  le = t.h, we = t.s, ke = t.v, { host: K, shadow: O } = Ue(), K.style.cssText = [
    "position: fixed",
    `z-index: ${te + 7}`,
    "pointer-events: auto"
  ].join("; "), O.innerHTML = Xf(), rm(), document.body.appendChild(K), em(K, e.anchor), ct(), document.addEventListener("mousedown", ko, !0), document.addEventListener("keydown", So, !0);
}
function Se() {
  K && (document.removeEventListener("mousedown", ko, !0), document.removeEventListener("keydown", So, !0), K.remove(), K = null, O = null, ue = null);
}
function nm() {
  return K !== null;
}
function ct() {
  if (!O) return;
  const e = O.querySelector('[data-region="sv-base"]');
  e && (e.style.background = `hsl(${le}deg, 100%, 50%)`);
  const t = O.querySelector('[data-region="sv-cursor"]');
  t && (t.style.left = `${we * 100}%`, t.style.top = `${(1 - ke) * 100}%`);
  const n = O.querySelector('[data-region="hue-cursor"]');
  n && (n.style.top = `${le / 360 * 100}%`);
  const [r, o, s] = mo(le, we, ke), i = bo(r, o, s), a = O.querySelector('[data-region="preview"]');
  a && (a.style.background = `rgb(${r}, ${o}, ${s})`);
  const c = O.querySelector('[data-region="hex"]');
  c && (c.textContent = i), O.querySelectorAll("[data-channel]").forEach((l) => {
    if (document.activeElement === K && O.activeElement === l) return;
    const u = l.dataset.channel;
    u === "r" ? l.value = String(r) : u === "g" ? l.value = String(o) : u === "b" && (l.value = String(s));
  });
}
function wo() {
  const [e, t, n] = mo(le, we, ke);
  return bo(e, t, n);
}
function rm() {
  if (!O) return;
  const e = O.querySelector('[data-region="sv"]');
  e && hr(e, (n) => om(e, n));
  const t = O.querySelector('[data-region="hue"]');
  t && hr(t, (n) => sm(t, n)), O.addEventListener("input", (n) => {
    var c, l, u;
    const r = n.target;
    if (!(r instanceof HTMLInputElement) || !r.dataset.channel) return;
    const o = cn((c = O.querySelector('[data-channel="r"]')) == null ? void 0 : c.value), s = cn((l = O.querySelector('[data-channel="g"]')) == null ? void 0 : l.value), i = cn((u = O.querySelector('[data-channel="b"]')) == null ? void 0 : u.value), a = go(o, s, i);
    le = a.h, we = a.s, ke = a.v, ct();
  }), O.addEventListener("click", (n) => {
    const r = n.target;
    if (!(r instanceof Element)) return;
    const o = r.closest("[data-action]"), s = o == null ? void 0 : o.getAttribute("data-action");
    if (s === "confirm")
      ue == null || ue(wo()), Se();
    else if (s === "eyedrop")
      If(mr);
    else if (s === "recent") {
      const i = o == null ? void 0 : o.getAttribute("data-color");
      i && mr(i);
    }
  });
}
function mr(e) {
  const t = _o(e);
  le = t.h, we = t.s, ke = t.v, ct();
}
function om(e, t) {
  const n = e.getBoundingClientRect();
  we = Math.max(0, Math.min(1, (t.clientX - n.left) / n.width)), ke = Math.max(0, Math.min(1, 1 - (t.clientY - n.top) / n.height)), ct();
}
function sm(e, t) {
  const n = e.getBoundingClientRect();
  le = Math.max(0, Math.min(1, (t.clientY - n.top) / n.height)) * 360, ct();
}
function ko(e) {
  if (!K) return;
  const t = e.target;
  t instanceof HTMLElement && K.contains(t) || Se();
}
function So(e) {
  e.key === "Escape" ? (e.preventDefault(), Se()) : e.key === "Enter" && (e.preventDefault(), ue == null || ue(wo()), Se());
}
const _t = 8, Le = 6, $o = 32, gr = 16, yt = 4, Ao = [
  { name: "nw", cursor: "nwse-resize", offset: (e) => ({ x: e.x, y: e.y }) },
  { name: "n", cursor: "ns-resize", offset: (e) => ({ x: e.x + e.width / 2, y: e.y }) },
  { name: "ne", cursor: "nesw-resize", offset: (e) => ({ x: e.x + e.width, y: e.y }) },
  { name: "e", cursor: "ew-resize", offset: (e) => ({ x: e.x + e.width, y: e.y + e.height / 2 }) },
  { name: "se", cursor: "nwse-resize", offset: (e) => ({ x: e.x + e.width, y: e.y + e.height }) },
  { name: "s", cursor: "ns-resize", offset: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height }) },
  { name: "sw", cursor: "nesw-resize", offset: (e) => ({ x: e.x, y: e.y + e.height }) },
  { name: "w", cursor: "ew-resize", offset: (e) => ({ x: e.x, y: e.y + e.height / 2 }) }
];
function br(e, t, n, r) {
  let { x: o, y: s, width: i, height: a } = t;
  return e === "nw" || e === "w" || e === "sw" ? (o += n, i -= n) : (e === "ne" || e === "e" || e === "se") && (i += n), e === "nw" || e === "n" || e === "ne" ? (s += r, a -= r) : (e === "sw" || e === "s" || e === "se") && (a += r), i < Le && (o = t.x + t.width - Le, i = Le), a < Le && (s = t.y + t.height - Le, a = Le), { x: o, y: s, width: i, height: a };
}
function Mo(e) {
  if (e.length === 0) return null;
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (const s of e)
    s.x < t && (t = s.x), s.y < n && (n = s.y), s.x > r && (r = s.x), s.y > o && (o = s.y);
  return { x: t, y: n, width: r - t, height: o - n };
}
function am(e) {
  const t = document.querySelector(`[data-annotation-text="${e}"]`);
  if (!t) return null;
  const n = t.getBoundingClientRect();
  return { x: n.left, y: n.top, width: n.width, height: n.height };
}
const $ = {
  host: null,
  activeId: null,
  activeMode: "shape",
  dragState: null,
  unsubscribeScenario: null
}, C = "http://www.w3.org/2000/svg";
function Eo(e) {
  if (!e.bounds) return e;
  const t = J();
  return t ? {
    ...e,
    boundsAnchorOffset: {
      x: e.bounds.x - t.left,
      y: e.bounds.y - t.top
    }
  } : { ...e, boundsAnchorOffset: void 0 };
}
function im(e) {
  if (!e.points) return e;
  const t = J();
  return t ? {
    ...e,
    pointsAnchorOffset: e.points.map((n) => ({
      x: n.x - t.left,
      y: n.y - t.top
    }))
  } : { ...e, pointsAnchorOffset: void 0 };
}
function cm() {
  document.removeEventListener("mousemove", Bn, !0), document.removeEventListener("mouseup", qn, !0), document.removeEventListener("keydown", To, !0);
}
function lm() {
  document.addEventListener("keydown", To, !0);
}
function um(e, t) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const n = E($.activeId);
  if (!n || n.kind !== "shape") return;
  const r = jt(n, J());
  $.dragState = {
    kind: "resize",
    handle: t,
    startMouse: { x: e.clientX, y: e.clientY },
    startBounds: { ...n.bounds, x: r.x, y: r.y }
  }, Gt();
}
function dm(e) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const t = E($.activeId);
  if (!t || t.kind !== "shape") return;
  const n = t.bounds.x + t.bounds.width / 2, r = t.bounds.y + t.bounds.height / 2, o = Math.atan2(e.clientY - r, e.clientX - n) * 180 / Math.PI;
  $.dragState = {
    kind: "rotate",
    center: { x: n, y: r },
    startMouseAngle: o,
    startRotation: t.rotate ?? 0
  }, Gt();
}
function Lo(e, t) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const n = E($.activeId);
  if (!n) return;
  const r = t(), o = Math.atan2(e.clientY - r.y, e.clientX - r.x) * 180 / Math.PI, s = n.kind === "shape" || n.kind === "freedraw" || n.kind === "text" ? n.rotate ?? 0 : 0;
  $.dragState = {
    kind: "rotate",
    center: r,
    startMouseAngle: o,
    startRotation: s
  }, Gt();
}
function pm(e, t) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const n = E($.activeId);
  if (!n || n.kind !== "freedraw") return;
  const r = Vt(n, J()), o = Mo(r);
  !o || o.width === 0 || o.height === 0 || ($.dragState = {
    kind: "freedraw-resize",
    handle: t,
    startMouse: { x: e.clientX, y: e.clientY },
    startBounds: { ...o },
    startPoints: r.map((s) => ({ ...s }))
  }, Gt());
}
function Gt() {
  Pt("handle-drag"), document.addEventListener("mousemove", Bn, !0), document.addEventListener("mouseup", qn, !0);
}
function Bn(e) {
  const { activeId: t, dragState: n } = $;
  if (!t || !n) return;
  e.preventDefault();
  const r = E(t);
  if (!r) return;
  const o = n.kind !== "rotate" ? e.clientX - n.startMouse.x : 0, s = n.kind !== "rotate" ? e.clientY - n.startMouse.y : 0;
  if (n.kind === "resize" && r.kind === "shape") {
    const i = br(n.handle, n.startBounds, o, s);
    L(t, Eo({ bounds: i }));
  } else if (n.kind === "freedraw-resize" && r.kind === "freedraw") {
    const i = n.startBounds, a = br(n.handle, i, o, s), c = i.width === 0 ? 1 : a.width / i.width, l = i.height === 0 ? 1 : a.height / i.height, u = n.startPoints.map((h) => ({
      x: a.x + (h.x - i.x) * c,
      y: a.y + (h.y - i.y) * l
    }));
    L(t, im({ points: u }));
  } else if (n.kind === "rotate") {
    const i = Math.atan2(e.clientY - n.center.y, e.clientX - n.center.x) * 180 / Math.PI;
    let a = (n.startRotation + (i - n.startMouseAngle)) % 360;
    a < 0 && (a += 360), r.kind === "shape" ? L(t, { rotate: a }) : r.kind === "freedraw" ? L(t, { rotate: a }) : r.kind === "text" && L(t, { rotate: a });
  }
}
function qn() {
  document.removeEventListener("mousemove", Bn, !0), document.removeEventListener("mouseup", qn, !0), $.dragState = null, st();
}
function To(e) {
  var o;
  const { activeId: t } = $;
  if (!t) return;
  const n = (o = e.target) == null ? void 0 : o.tagName;
  if (n === "INPUT" || n === "TEXTAREA" || n === "SELECT") return;
  const r = document.activeElement;
  if (!(r != null && r.isContentEditable)) {
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault(), Vr(t);
      return;
    }
    if (e.key.startsWith("Arrow")) {
      const s = E(t);
      if (!s || s.kind !== "shape") return;
      const i = e.shiftKey ? 10 : 1, a = e.key === "ArrowLeft" ? -i : e.key === "ArrowRight" ? i : 0, c = e.key === "ArrowUp" ? -i : e.key === "ArrowDown" ? i : 0;
      if (a !== 0 || c !== 0) {
        e.preventDefault();
        const l = jt(s, J());
        L(
          t,
          Eo({ bounds: { ...s.bounds, x: l.x + a, y: l.y + c } })
        );
      }
    }
  }
}
function Co(e, t, n, r, o) {
  const s = document.createElementNS(C, "rect");
  return s.setAttribute("x", String(e - _t / 2)), s.setAttribute("y", String(t - _t / 2)), s.setAttribute("width", String(_t)), s.setAttribute("height", String(_t)), s.setAttribute("fill", "oklch(1 0 0)"), s.setAttribute("stroke", "oklch(0.48 0.085 245)"), s.setAttribute("stroke-width", "2"), s.style.cursor = r, s.style.pointerEvents = "auto", s.setAttribute("pointer-events", "all"), s.addEventListener("mousedown", (i) => o(i, n)), s;
}
function Po(e, t, n) {
  const r = document.createElementNS(C, "g"), o = t - 18, s = t - $o, i = 12, a = document.createElementNS(C, "line");
  a.setAttribute("x1", String(e)), a.setAttribute("y1", String(t)), a.setAttribute("x2", String(e)), a.setAttribute("y2", String(o)), a.setAttribute("stroke", "oklch(0.48 0.085 245)"), a.setAttribute("stroke-width", "1"), a.setAttribute("stroke-dasharray", "2 3"), a.style.pointerEvents = "none", r.appendChild(a);
  const c = document.createElementNS(C, "circle");
  c.setAttribute("cx", String(e)), c.setAttribute("cy", String(s + 1)), c.setAttribute("r", String(i)), c.setAttribute("fill", "rgba(0,0,0,0.04)"), c.style.pointerEvents = "none", r.appendChild(c);
  const l = document.createElementNS(C, "circle");
  l.setAttribute("cx", String(e)), l.setAttribute("cy", String(s)), l.setAttribute("r", String(i)), l.setAttribute("fill", "oklch(1 0 0)"), l.setAttribute("stroke", "oklch(0.48 0.085 245)"), l.setAttribute("stroke-width", "1"), l.style.cursor = "grab", l.setAttribute("pointer-events", "all"), r.appendChild(l);
  const u = e - 8, h = s - 8, d = document.createElementNS(C, "path");
  d.setAttribute("d", `M ${u + 4} ${h + 11} A 5 5 0 1 1 ${u + 11} ${h + 4}`), d.setAttribute("fill", "none"), d.setAttribute("stroke", "oklch(0.48 0.085 245)"), d.setAttribute("stroke-width", "1.5"), d.setAttribute("stroke-linecap", "round"), d.setAttribute("stroke-linejoin", "round"), d.style.pointerEvents = "none", r.appendChild(d);
  const p = document.createElementNS(C, "path");
  return p.setAttribute(
    "d",
    `M ${u + 11} ${h + 1.5} L ${u + 14} ${h + 4} L ${u + 11} ${h + 6.5} Z`
  ), p.setAttribute("fill", "oklch(0.48 0.085 245)"), p.setAttribute("stroke", "oklch(0.48 0.085 245)"), p.setAttribute("stroke-width", "1.5"), p.setAttribute("stroke-linejoin", "round"), p.style.pointerEvents = "none", r.appendChild(p), l.addEventListener("mousedown", (f) => n(f)), r;
}
function Fn(e, t) {
  const n = document.createElementNS(C, "g"), r = e.x - gr, o = e.y - gr;
  return n.appendChild(hm(r, o, t)), n;
}
function hm(e, t, n) {
  const r = document.createElementNS(C, "g");
  r.style.cursor = "pointer", r.style.pointerEvents = "auto", r.setAttribute("pointer-events", "all");
  const o = document.createElementNS(C, "circle");
  o.setAttribute("cx", String(e)), o.setAttribute("cy", String(t + 1)), o.setAttribute("r", "12"), o.setAttribute("fill", "rgba(0,0,0,0.04)"), o.style.pointerEvents = "none", r.appendChild(o);
  const s = document.createElementNS(C, "circle");
  s.setAttribute("cx", String(e)), s.setAttribute("cy", String(t)), s.setAttribute("r", "12"), s.setAttribute("fill", "oklch(1 0 0)"), s.setAttribute("stroke", "oklch(0.92 0.008 240)"), s.setAttribute("stroke-width", "1"), r.appendChild(s);
  const i = e - 6, a = t - 6, c = document.createElementNS(C, "path");
  return c.setAttribute(
    "d",
    [
      `M ${i + 1.5} ${a + 3.5} L ${i + 10.5} ${a + 3.5}`,
      `M ${i + 4.5} ${a + 3.5} L ${i + 4.5} ${a + 2} L ${i + 7.5} ${a + 2} L ${i + 7.5} ${a + 3.5}`,
      `M ${i + 3} ${a + 3.5} L ${i + 3.5} ${a + 10.5} A 0.8 0.8 0 0 0 ${i + 4.3} ${a + 11} L ${i + 7.7} ${a + 11} A 0.8 0.8 0 0 0 ${i + 8.5} ${a + 10.5} L ${i + 9} ${a + 3.5}`
    ].join(" ")
  ), c.setAttribute("fill", "none"), c.setAttribute("stroke", "oklch(0.50 0.015 240)"), c.setAttribute("stroke-width", "1.2"), c.setAttribute("stroke-linecap", "round"), c.setAttribute("stroke-linejoin", "round"), c.style.pointerEvents = "none", r.appendChild(c), r.addEventListener("mousedown", (l) => {
    l.stopPropagation(), l.preventDefault(), n();
  }), r;
}
function zn(e) {
  const t = document.createElementNS(C, "rect");
  return t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("width", String(e.width)), t.setAttribute("height", String(e.height)), t.setAttribute("fill", "none"), t.setAttribute("stroke", "oklch(0.48 0.085 245)"), t.setAttribute("stroke-width", "1"), t.setAttribute("stroke-dasharray", "4 3"), t;
}
function Yt() {
  const { host: e, activeId: t, activeMode: n } = $;
  if (!e || !t) return;
  for (; e.firstChild; ) e.removeChild(e.firstChild);
  const r = E(t);
  if (!r) {
    $n();
    return;
  }
  if (n === "freedraw" && r.kind === "freedraw") {
    bm(e, r);
    return;
  }
  if (n === "text" && r.kind === "text") {
    gm(e, r);
    return;
  }
  if (r.kind !== "shape") {
    $n();
    return;
  }
  fm(e, r);
}
function fm(e, t) {
  const n = jt(t, J()), r = { ...t.bounds, x: n.x, y: n.y }, o = t.rotate ?? 0, s = r.x + r.width / 2, i = r.y + r.height / 2, a = document.createElementNS(C, "g");
  o && a.setAttribute("transform", `rotate(${o} ${s} ${i})`), a.appendChild(zn(r));
  for (const c of Ao) {
    const { x: l, y: u } = c.offset(r);
    a.appendChild(Co(l, u, c.name, c.cursor, um));
  }
  a.appendChild(mm(r)), e.appendChild(a), e.appendChild(Fn(r, Hn));
}
function mm(e) {
  const t = e.x + e.width / 2, n = e.y - $o, r = document.createElementNS(C, "g"), o = document.createElementNS(C, "line");
  o.setAttribute("x1", String(t)), o.setAttribute("y1", String(e.y)), o.setAttribute("x2", String(t)), o.setAttribute("y2", String(n)), o.setAttribute("stroke", "oklch(0.48 0.085 245)"), o.setAttribute("stroke-width", "1"), r.appendChild(o);
  const s = document.createElementNS(C, "g");
  s.style.cursor = "grab", s.style.pointerEvents = "auto", s.setAttribute("pointer-events", "all");
  const i = document.createElementNS(C, "circle");
  i.setAttribute("cx", String(t)), i.setAttribute("cy", String(n)), i.setAttribute("r", "9"), i.setAttribute("fill", "oklch(1 0 0)"), i.setAttribute("stroke", "oklch(0.48 0.085 245)"), i.setAttribute("stroke-width", "2"), s.appendChild(i);
  const a = document.createElementNS(C, "path");
  return a.setAttribute(
    "d",
    `M ${t - 4} ${n - 1} A 4 4 0 1 1 ${t + 3} ${n + 2} M ${t + 1} ${n - 1} L ${t + 3} ${n + 2} L ${t + 5} ${n - 1}`
  ), a.setAttribute("fill", "none"), a.setAttribute("stroke", "oklch(0.48 0.085 245)"), a.setAttribute("stroke-width", "1.4"), a.setAttribute("stroke-linecap", "round"), a.setAttribute("stroke-linejoin", "round"), a.style.pointerEvents = "none", s.appendChild(a), s.addEventListener("mousedown", (c) => dm(c)), r.appendChild(s), r;
}
function gm(e, t) {
  const n = am(t.id);
  if (!n) return;
  const r = Io(n), o = r.x + r.width / 2, s = r.y + r.height / 2;
  e.appendChild(zn(r)), e.appendChild(Po(o, r.y, (i) => Lo(i, () => ({ x: o, y: s })))), e.appendChild(Fn(r, Hn));
}
function bm(e, t) {
  const n = Vt(t, J()), r = Mo(n);
  if (!r) return;
  const o = Io(r), s = o.x + o.width / 2, i = o.y + o.height / 2;
  e.appendChild(zn(o));
  for (const a of Ao) {
    if (a.name !== "nw" && a.name !== "ne" && a.name !== "sw" && a.name !== "se") continue;
    const { x: c, y: l } = a.offset(o);
    e.appendChild(Co(c, l, a.name, a.cursor, pm));
  }
  e.appendChild(Po(s, o.y, (a) => Lo(a, () => ({ x: s, y: i })))), e.appendChild(Fn(o, Hn));
}
function Io(e) {
  return {
    x: e.x - yt,
    y: e.y - yt,
    width: e.width + yt * 2,
    height: e.height + yt * 2
  };
}
function Hn() {
  const e = $.activeId;
  e && Vr(e);
}
function _m(e) {
  const t = E(e);
  if (!t) return;
  const n = t.entryAnimation;
  if (!n || n.kind === "none") return;
  const o = {
    text: `[data-annotation-text="${e}"]`,
    shape: `[data-annotation-shape="${e}"]`,
    freedraw: `[data-annotation-freedraw="${e}"]`,
    arrow: `[data-annotation-arrow="${e}"]`
  }[t.kind];
  if (!o) return;
  const s = document.querySelectorAll(o);
  if (s.length === 0) return;
  const i = t.kind === "shape" || t.kind === "freedraw" || t.kind === "text" ? t.rotate ?? 0 : 0;
  s.forEach((a) => {
    a.style.animation = "";
  }), s[0].getBoundingClientRect(), s.forEach((a) => {
    a.style.transformBox = "fill-box", a.style.transformOrigin = "center", a.style.setProperty("--wp-final-rot", `${i}deg`), a.style.animation = `wp-${n.kind} ${Math.max(50, n.durationMs)}ms ease-out backwards`;
    const c = () => {
      a.style.animation = "", a.style.transformBox = "", a.style.transformOrigin = "", a.removeEventListener("animationend", c), a.removeEventListener("animationcancel", c);
    };
    a.addEventListener("animationend", c), a.addEventListener("animationcancel", c);
  });
}
function ym(e) {
  const t = E(e);
  !t || t.kind !== "shape" || ($.activeId = e, $.activeMode = "shape", Wn(), Yt());
}
function vm(e) {
  const t = E(e);
  !t || t.kind !== "freedraw" || ($.activeId = e, $.activeMode = "freedraw", Wn(), Yt());
}
function xm(e) {
  const t = E(e);
  !t || t.kind !== "text" || ($.activeId = e, $.activeMode = "text", Wn(), Yt());
}
function $n() {
  var e;
  $.host && (cm(), (e = $.unsubscribeScenario) == null || e.call($), $.unsubscribeScenario = null, $.host.remove(), $.host = null, $.activeId = null, $.activeMode = "shape", $.dragState = null);
}
function wm(e) {
  return $.host !== null && e !== null && $.host.contains(e);
}
function Wn() {
  if ($.host) return;
  const e = document.createElementNS(C, "svg");
  e.setAttribute("data-manuscript", "ui"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.style.cssText = [
    "position: fixed",
    "top: 0",
    "left: 0",
    "width: 100vw",
    "height: 100vh",
    "pointer-events: none",
    `z-index: ${te + 4}`,
    "overflow: visible"
  ].join("; "), document.body.appendChild(e), $.host = e, lm(), $.unsubscribeScenario = ot(Yt);
}
function km(e) {
  switch (e.kind) {
    case "text":
      return { style: { ...e.style }, entryAnimation: e.entryAnimation };
    case "shape":
      return {
        fill: e.fill,
        stroke: e.stroke,
        strokeWidth: e.strokeWidth,
        fillOpacity: e.fillOpacity,
        entryAnimation: e.entryAnimation
      };
    case "arrow":
      return { color: e.color, strokeWidth: e.strokeWidth, entryAnimation: e.entryAnimation };
    case "freedraw":
      return {
        stroke: e.stroke,
        strokeWidth: e.strokeWidth,
        strokeOpacity: e.strokeOpacity,
        entryAnimation: e.entryAnimation
      };
  }
}
const Sm = 400, $m = 0;
function Am(e) {
  return {
    kind: e,
    durationMs: Sm,
    delayMs: $m
  };
}
function Mm(e) {
  var t;
  return ((t = e.entryAnimation) == null ? void 0 : t.kind) ?? "none";
}
const _r = 10, Em = 46, Oo = 12, Ro = 36, No = 0, Do = 20, Lm = [
  { token: "var(--ann-mut-1)", resolved: "oklch(0.20 0.008 250)" },
  { token: "var(--ann-mut-2)", resolved: "oklch(0.99 0 0)" },
  { token: "var(--ann-mut-3)", resolved: "oklch(0.45 0.10 27)" },
  { token: "var(--ann-mut-4)", resolved: "oklch(0.50 0.09 350)" },
  { token: "var(--ann-mut-5)", resolved: "oklch(0.45 0.08 145)" },
  { token: "var(--ann-mut-6)", resolved: "oklch(0.42 0.09 250)" },
  { token: "var(--ann-mut-7)", resolved: "oklch(0.62 0.10 75)" },
  { token: "var(--ann-mut-8)", resolved: "oklch(0.42 0.08 290)" }
], Tm = [
  { token: "var(--ann-vib-1)", resolved: "oklch(0.18 0.005 250)" },
  { token: "var(--ann-vib-2)", resolved: "oklch(0.99 0 0)" },
  { token: "var(--ann-vib-3)", resolved: "oklch(0.62 0.22 27)" },
  { token: "var(--ann-vib-4)", resolved: "oklch(0.70 0.18 350)" },
  { token: "var(--ann-vib-5)", resolved: "oklch(0.60 0.16 145)" },
  { token: "var(--ann-vib-6)", resolved: "oklch(0.55 0.18 250)" },
  { token: "var(--ann-vib-7)", resolved: "oklch(0.82 0.15 90)" },
  { token: "var(--ann-vib-8)", resolved: "oklch(0.50 0.18 290)" }
], yr = [
  { label: "Sans", value: "'Pretendard Variable', Pretendard, system-ui, sans-serif" },
  { label: "Serif", value: "'EB Garamond', Georgia, serif" },
  { label: "Mono", value: "ui-monospace, monospace" }
];
function Cm(e) {
  return !e || e.length === 0 ? [...yr] : [
    ...e.map((t) => ({ label: qh(t), value: t })),
    ...yr
  ];
}
const Pm = [
  { value: "none", label: "None" },
  { value: "fade", label: "Fade" },
  { value: "slide-left", label: "Slide →" },
  { value: "slide-right", label: "Slide ←" },
  { value: "slide-up", label: "Slide ↑" },
  { value: "slide-down", label: "Slide ↓" },
  { value: "bounce", label: "Bounce" },
  { value: "zoom", label: "Zoom" },
  { value: "rotate", label: "Rotate (2×)" }
], S = {
  host: null,
  shadow: null,
  activeId: null,
  activeKind: null,
  activeAnchorSelector: null,
  swatchMode: "muted",
  unsubscribeScenario: null
};
function Bo(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  n && (n.kind === "text" ? L(t, { style: { ...n.style, color: e } }) : n.kind === "shape" ? L(t, { stroke: e }) : n.kind === "freedraw" && L(t, { stroke: e }));
}
function qo(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  n && (n.kind === "text" ? L(t, { style: { ...n.style, backgroundColor: e } }) : n.kind === "shape" && L(t, { fill: e }));
}
function Fo(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  !n || n.kind !== "text" || L(t, { style: { ...n.style, borderColor: e } });
}
function Im(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  !n || n.kind !== "text" || L(t, { style: { ...n.style, fontFamily: e } });
}
function Om(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  !n || n.kind !== "text" || L(t, { style: { ...n.style, fontSize: e } });
}
function Rm() {
  const e = S.activeId;
  if (!e) return;
  const t = E(e);
  !t || t.kind !== "text" || L(e, { style: { ...t.style, bold: !t.style.bold } });
}
function Nm() {
  const e = S.activeId;
  if (!e) return;
  const t = E(e);
  !t || t.kind !== "text" || L(e, {
    style: { ...t.style, italic: t.style.italic !== !0 }
  });
}
function Dm(e) {
  const t = S.activeId;
  t && L(t, {
    entryAnimation: e === "none" ? void 0 : Am(e)
  });
}
function Bm(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  if (!n) return;
  const r = Math.max(0, Math.min(1, e));
  n.kind === "text" ? L(t, { style: { ...n.style, backgroundOpacity: r } }) : n.kind === "shape" ? L(t, { fillOpacity: r }) : n.kind === "freedraw" && L(t, { strokeOpacity: r });
}
function qm(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  n && (n.kind === "shape" ? L(t, { strokeWidth: e }) : n.kind === "freedraw" && L(t, { strokeWidth: e }));
}
function Fm() {
  const { shadow: e } = S;
  if (!e) return;
  const t = e.querySelector('[data-region="alpha-track"]'), n = e.querySelector('[data-region="alpha-thumb"]');
  if (!t || !n) return;
  let r = !1;
  const o = (i) => {
    r && ln(t, i.clientX);
  }, s = () => {
    r = !1, document.removeEventListener("mousemove", o, !0), document.removeEventListener("mouseup", s, !0), st();
  };
  n.addEventListener("mousedown", (i) => {
    Pt("alpha"), r = !0, ln(t, i.clientX), document.addEventListener("mousemove", o, !0), document.addEventListener("mouseup", s, !0), i.preventDefault();
  }), t.addEventListener("mousedown", (i) => {
    const a = i.target;
    a instanceof Element && a.closest('[data-region="alpha-thumb"]') || (Pt("alpha"), ln(t, i.clientX), r = !0, document.addEventListener("mousemove", o, !0), document.addEventListener("mouseup", s, !0));
  });
}
function ln(e, t) {
  const n = e.getBoundingClientRect();
  Bm(Math.max(0, Math.min(1, (t - n.left) / n.width)));
}
function An(e, t) {
  return e.kind === "text" ? t === "text" ? e.style.color : t === "border" ? e.style.borderColor ?? "#000000" : e.style.backgroundColor ?? "transparent" : e.kind === "shape" ? t === "text" ? e.stroke : e.fill : t === "text" ? e.stroke : "";
}
function zm(e) {
  return e.kind === "text" ? e.style.backgroundOpacity ?? 1 : e.kind === "shape" ? e.fillOpacity ?? 1 : e.strokeOpacity ?? 1;
}
function un(e, t) {
  return e ? e === t ? !0 : e.replace(/\s+/g, "") === t.replace(/\s+/g, "") : !1;
}
function dn(e, t, n) {
  var l, u, h;
  const r = S.swatchMode === "muted" ? Lm : Tm, o = [];
  if (n && (e === "bg" || e === "border")) {
    const d = t === "transparent" || !t;
    o.push(`
      <button type="button" class="swatch transparent" data-swatch="${e}" data-value="transparent" title="Transparent" aria-pressed="${d}">
        <svg viewBox="0 0 22 22" width="22" height="22">
          <line x1="3" y1="19" x2="19" y2="3" stroke="var(--c-error)" stroke-width="1.5"/>
        </svg>
      </button>
    `);
  }
  for (let d = 0; d < r.length; d++) {
    const p = r[d];
    if (!p) continue;
    const f = d === 1, m = un(t, p.resolved);
    o.push(`
      <button type="button" class="swatch${f ? " is-white" : ""}" data-swatch="${e}" data-value="${p.resolved}" style="background:${p.resolved}" aria-pressed="${m}" title="${e} ${p.resolved}"></button>
    `);
  }
  const s = D(), i = (e === "text" || e === "border" ? (l = s == null ? void 0 : s.siteColors) == null ? void 0 : l.text : (u = s == null ? void 0 : s.siteColors) == null ? void 0 : u.background) ?? [];
  for (const d of i) {
    const p = un(t, d);
    o.push(`
      <button type="button" class="swatch site" data-swatch="${e}" data-value="${H(d)}" style="background:${H(d)}" aria-pressed="${p}" title="Site color ${H(d)}"></button>
    `);
  }
  const a = e === "text" || e === "border" ? "text" : "background", c = ((h = s == null ? void 0 : s.customColors) == null ? void 0 : h[a]) ?? [];
  for (const d of c) {
    const p = un(t, d);
    o.push(`
      <span class="swatch-wrap">
        <button type="button" class="swatch" data-swatch="${e}" data-value="${H(d)}" style="background:${H(d)}" aria-pressed="${p}" title="Custom ${H(d)}"></button>
        <button type="button" class="swatch-remove" data-action="custom-remove" data-slot="${e}" data-value="${H(d)}" title="Remove" aria-label="Remove color ${H(d)}">×</button>
      </span>
    `);
  }
  return o.push(`
    <button type="button" class="swatch more" data-action="more-colors" data-slot="${e}" title="More colors" aria-label="More colors">···</button>
  `), o.join("");
}
function Un() {
  const { shadow: e, activeId: t, activeKind: n } = S;
  if (!e || !t || !n) return;
  const r = E(t);
  if (!r || r.kind === "arrow") return;
  const o = r, s = e.querySelector('[data-region="caption"]');
  s && (s.textContent = Ym(n)), e.querySelectorAll('[data-action="swatch-mode"]').forEach((i) => {
    const a = i.getAttribute("data-mode");
    i.setAttribute("aria-pressed", String(a === S.swatchMode));
  }), Hm(e, n), Wm(e, n, o), Um(e, n, o), jm(e, n, o), Vm(e, o), Gm(e, o);
}
function Hm(e, t) {
  const n = e.querySelector('[data-region="type-row"]'), r = e.querySelector('[data-region="divider-1"]'), o = t === "text";
  n && (n.hidden = !o), r && (r.hidden = !o);
  const s = e.querySelector('[data-region="width-row"]'), i = t === "shape" || t === "freedraw";
  s && (s.hidden = !i);
  const a = e.querySelector('[data-region="bg-row"]');
  a && (a.hidden = t === "freedraw");
  const c = e.querySelector('[data-region="border-row"]');
  c && (c.hidden = t !== "text");
  const l = e.querySelector('[data-region="text-label"]');
  l && (l.textContent = t === "text" ? "Text" : "Stroke");
  const u = e.querySelector('[data-region="bg-label"]');
  u && (u.textContent = t === "text" ? "Bg" : "Fill");
}
function Wm(e, t, n) {
  if (t !== "text" || n.kind !== "text") return;
  const r = e.querySelector('[data-region="font"]');
  r && (r.value = n.style.fontFamily);
  const o = e.querySelector('[data-region="size"]');
  o && (o.value = String(n.style.fontSize));
  const s = e.querySelector('[data-region="bold"]');
  s && s.setAttribute("aria-pressed", String(n.style.bold));
  const i = e.querySelector('[data-region="italic"]');
  i && i.setAttribute("aria-pressed", String(n.style.italic === !0));
}
function Um(e, t, n) {
  if (t !== "shape" && t !== "freedraw" || n.kind !== "shape" && n.kind !== "freedraw") return;
  const r = e.querySelector('[data-region="width"]'), o = e.querySelector('[data-region="width-value"]'), s = n.strokeWidth;
  r && (r.value = String(s)), o && (o.textContent = String(s));
}
function jm(e, t, n) {
  const r = e.querySelector('[data-region="text-swatches"]'), o = e.querySelector('[data-region="bg-swatches"]'), s = e.querySelector('[data-region="border-swatches"]'), i = e.querySelector('[data-region="bg-row"]'), a = e.querySelector('[data-region="border-row"]'), c = An(n, "text"), l = An(n, "bg");
  if (r && (r.innerHTML = dn("text", c, !1)), o && !(i != null && i.hidden) && (o.innerHTML = dn("bg", l, t === "text")), s && !(a != null && a.hidden) && n.kind === "text") {
    const u = n.style.borderColor ?? "#000000";
    s.innerHTML = dn("border", u, !0);
  }
}
function Vm(e, t) {
  const n = e.querySelector('[data-region="effect"]');
  n && (n.value = Mm(t));
}
function Gm(e, t) {
  const n = Math.round(zm(t) * 100), r = e.querySelector('[data-region="alpha-fill"]'), o = e.querySelector('[data-region="alpha-thumb"]'), s = e.querySelector('[data-region="alpha-value"]');
  r && (r.style.width = `${n}%`), o && (o.style.left = `${n}%`), s && (s.textContent = `${n}%`);
}
function Ym(e) {
  return e === "text" ? "Text" : e === "shape" ? "Shape" : "Freedraw";
}
let He = !1;
function Xm(e) {
  const { shadow: t, host: n } = S;
  if (!t || !n) return;
  const r = (s) => s.stopPropagation();
  n.addEventListener("keydown", r), n.addEventListener("keypress", r), n.addEventListener("keyup", r), t.addEventListener("click", (s) => Km(s)), t.addEventListener("change", (s) => Zm(s)), t.addEventListener("input", (s) => Jm(s)), Fm();
  const o = () => {
    He && (He = !1, st()), e();
  };
  document.addEventListener("mousedown", (s) => eg(s, o), !0), document.addEventListener("keydown", (s) => tg(s, o), !0);
}
function pn(e) {
  const t = S.shadow;
  if (!t) return;
  const n = t.querySelector('[data-region="format-painter-menu"]'), r = t.querySelector('[data-region="format-painter"]');
  n && (e ? n.removeAttribute("hidden") : n.setAttribute("hidden", "")), r == null || r.setAttribute("aria-expanded", String(e));
}
function Km(e) {
  var l;
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.closest('[data-action="format-painter-toggle"]')) {
    const u = (l = S.shadow) == null ? void 0 : l.querySelector('[data-region="format-painter-menu"]');
    pn((u == null ? void 0 : u.hasAttribute("hidden")) ?? !1);
    return;
  }
  t.closest(".format-painter-wrap") || pn(!1);
  const n = t.closest('[data-action="swatch-mode"]');
  if (n) {
    const u = n.getAttribute("data-mode");
    (u === "muted" || u === "vibrant") && (S.swatchMode = u, Un());
    return;
  }
  const r = t.closest('[data-action="batch-apply"]');
  if (r) {
    const { activeId: u } = S;
    if (!u) return;
    const h = E(u);
    if (!h) return;
    const d = km(h);
    r.getAttribute("data-scope") === "scenario" ? Gh(h.kind, d) : Vh(h.kind, d), pn(!1);
    return;
  }
  if (t.closest('[data-region="bold"]')) return Rm();
  if (t.closest('[data-region="italic"]')) return Nm();
  if (t.closest('[data-region="effect-play"]')) {
    S.activeId && _m(S.activeId);
    return;
  }
  const o = t.closest('[data-swatch="text"]');
  if (o) return Bo(o.getAttribute("data-value") ?? "");
  const s = t.closest('[data-swatch="bg"]');
  if (s) return qo(s.getAttribute("data-value") ?? "");
  const i = t.closest('[data-swatch="border"]');
  if (i) return Fo(i.getAttribute("data-value") ?? "");
  const a = t.closest('[data-action="more-colors"]');
  if (a instanceof HTMLElement) return Qm(a);
  const c = t.closest('[data-action="custom-remove"]');
  if (c instanceof HTMLElement) {
    const u = c.getAttribute("data-slot"), h = c.getAttribute("data-value");
    u && h && Xh(u === "text" || u === "border" ? "text" : "background", h);
  }
}
function Zm(e) {
  const t = e.target;
  t instanceof HTMLElement && (t.dataset.region === "font" ? Im(t.value) : t.dataset.region === "effect" ? Dm(t.value) : t.dataset.region === "width" && He && (He = !1, st()));
}
function Jm(e) {
  const t = e.target;
  if (t instanceof HTMLInputElement) {
    if (t.dataset.region === "size") {
      const n = Math.max(Oo, Math.min(Ro, Number(t.value) || 16));
      Om(n);
    } else if (t.dataset.region === "width") {
      He || (He = !0, Pt("width"));
      const n = Math.max(No, Math.min(Do, Number(t.value) || 0));
      qm(n);
    }
  }
}
function Qm(e) {
  const { activeId: t, activeKind: n } = S;
  if (!t || !n) return;
  const r = E(t);
  if (!r || r.kind === "arrow") return;
  const o = r, s = e.getAttribute("data-slot");
  if (!s) return;
  const i = An(o, s) || "#ffffff";
  tm({
    anchor: e,
    initialColor: i,
    onConfirm: (a) => {
      Yh(s === "text" || s === "border" ? "text" : "background", a), s === "text" ? Bo(a) : s === "border" ? Fo(a) : qo(a);
    }
  });
}
function eg(e, t) {
  const { host: n, activeAnchorSelector: r } = S, o = e.target;
  !(o instanceof HTMLElement) && !(o instanceof SVGElement) || n != null && n.contains(o) || wm(o) || nm() || r && o instanceof Element && o.closest(r) || o instanceof Element && o.closest('[data-manuscript="ui"]') || (t(), Se());
}
function tg(e, t) {
  e.key === "Escape" && (e.preventDefault(), t());
}
function zo(e) {
  const { host: t } = S;
  if (!t) return;
  t.style.left = "0px", t.style.top = "0px";
  const n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  let o = r.top - n.height - _r - Em;
  o < 8 && (o = r.bottom + _r);
  const s = Math.max(
    8,
    Math.min(r.left + r.width / 2 - n.width / 2, window.innerWidth - n.width - 8)
  );
  t.style.top = `${o}px`, t.style.left = `${s}px`;
}
function ng(e, t) {
  return e === "text" ? `[data-annotation-text="${t}"]` : e === "shape" ? `[data-annotation-shape="${t}"]` : `[data-annotation-freedraw="${t}"]`;
}
function rg(e, t) {
  e === "text" ? xm(t) : e === "shape" ? ym(t) : vm(t);
}
function og() {
  return `
    ${it()}
    :host { display: block; font-family: var(--ff-sans); color: var(--c-text); }
    *, *::before, *::after { box-sizing: border-box; }

    .popup {
      width: 320px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
      font-size: var(--fs-body);
    }
    .anchor-tick {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -1px);
      width: 12px;
      height: 6px;
      pointer-events: none;
    }

    .row { display: flex; align-items: center; gap: 6px; }
    .row.label-row { gap: 8px; }
    .label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
      width: 50px;
      padding-right: 6px;
      flex-shrink: 0;
    }
    .label.wide {
      letter-spacing: 0.10em;
      width: auto;
    }
    .divider {
      height: 1px;
      background: var(--c-border);
      margin: 2px 0;
    }

    .header { display: flex; align-items: center; justify-content: space-between; }
    .toggle {
      display: inline-flex;
      padding: 2px;
      background: var(--c-surface-2);
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
    }
    .toggle button {
      padding: 3px 9px;
      border: none;
      border-radius: var(--r-xs);
      background: transparent;
      color: var(--c-text-mute);
      font-size: 10px;
      font-weight: 600;
      font-family: var(--ff-sans);
      cursor: pointer;
      letter-spacing: 0.02em;
    }
    .toggle button[aria-pressed="true"] {
      background: var(--c-surface);
      color: var(--c-text);
      box-shadow: var(--shadow-sm);
    }

    .type-row { display: flex; align-items: center; gap: 6px; }
    .select, .size-input, .type-btn {
      height: 28px;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      font-family: var(--ff-sans);
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      padding: 0 10px;
    }
    .select {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      appearance: auto;
    }
    .size-input {
      width: 54px;
      padding: 0 8px;
      text-align: right;
      font-family: var(--ff-mono);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .type-btn {
      width: 28px;
      padding: 0;
      display: inline-grid;
      place-items: center;
      font-size: 12px;
      font-weight: 600;
    }
    .type-btn.italic { font-style: italic; font-weight: 500; }
    .type-btn[aria-pressed="true"] {
      background: var(--c-text);
      color: var(--c-surface);
      border-color: var(--c-text);
    }
    .type-btn[aria-pressed="false"] { color: var(--c-text-mute); }
  `;
}
function sg() {
  return `
    .swatch-row { display: flex; align-items: center; gap: 8px; }
    .swatches { display: flex; gap: 4px; flex: 1; flex-wrap: wrap; }
    .swatch {
      width: 22px;
      height: 22px;
      padding: 0;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      cursor: pointer;
      position: relative;
    }
    .swatch.is-white { border-color: var(--c-border-strong); }
    .swatch[aria-pressed="true"] {
      border: 2px solid var(--c-text);
      box-shadow: 0 0 0 2px var(--c-surface), 0 0 0 3px var(--c-text);
    }
    .swatch.transparent {
      background: var(--c-surface);
      border-color: var(--c-border-strong);
      overflow: hidden;
    }
    .swatch.transparent svg { position: absolute; inset: 0; }
    .swatch.more {
      background: var(--c-surface);
      border-color: var(--c-border);
      color: var(--c-text-mute);
      display: inline-grid;
      place-items: center;
      font-size: 10px;
      line-height: 1;
    }
    .swatch-wrap { position: relative; width: 22px; height: 22px; display: inline-block; }
    .swatch-remove {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 14px;
      height: 14px;
      padding: 0;
      border-radius: 999px;
      background: var(--c-text);
      color: var(--c-surface);
      border: 1px solid var(--c-surface);
      font-size: 10px;
      line-height: 1;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .swatch-wrap:hover .swatch-remove,
    .swatch-remove:focus-visible { display: inline-flex; }
    .swatch-remove:hover { background: var(--c-error); }
    /* hidden HTML attribute가 display:flex보다 우선되도록 */
    .type-row[hidden],
    .width-row[hidden],
    .swatch-row[hidden],
    .divider[hidden] { display: none !important; }

    .effect-controls { display: flex; flex: 1; gap: 4px; }
    .icon-btn {
      width: 28px;
      height: 28px;
      padding: 0;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      display: inline-grid;
      place-items: center;
      cursor: pointer;
    }
    .icon-btn:hover { border-color: var(--c-border-strong); }

    .alpha-row { display: flex; align-items: center; gap: 8px; }
    .alpha-track-wrap { flex: 1; height: 28px; display: flex; align-items: center; gap: 10px; }
    .alpha-track {
      flex: 1;
      height: 4px;
      border-radius: 999px;
      background: var(--c-border);
      position: relative;
      cursor: pointer;
    }
    .alpha-fill {
      position: absolute; left: 0; top: 0; bottom: 0;
      background: var(--c-text);
      border-radius: 999px;
    }
    .alpha-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--c-surface);
      border: 1.5px solid var(--c-text);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.08);
      cursor: grab;
    }
    .alpha-thumb:active { cursor: grabbing; }
    .alpha-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 32px;
      text-align: right;
    }

    .width-row { display: flex; align-items: center; gap: 8px; }
    .width-input { flex: 1; accent-color: var(--c-text); height: 4px; padding: 0; margin: 0; }
    .width-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 32px;
      text-align: right;
    }

    /* Format painter — brush button + dropdown of scope buttons. */
    .header-right { display: inline-flex; align-items: center; gap: 6px; }
    .format-painter-wrap { position: relative; display: inline-flex; }
    .format-painter-btn {
      width: 22px;
      height: 22px;
      padding: 0;
      appearance: none;
      background: transparent;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      color: var(--c-text-mute);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: border-color 160ms ease, color 160ms ease;
    }
    .format-painter-btn:hover,
    .format-painter-btn[aria-expanded="true"] {
      color: var(--c-text);
      border-color: var(--c-border-strong);
    }
    .format-painter-menu {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 96px;
      padding: 6px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-card);
    }
    .format-painter-menu[hidden] { display: none; }
    .batch-btn {
      appearance: none;
      background: var(--c-surface-2);
      border: 1px solid var(--c-border);
      color: var(--c-text-mute);
      font: inherit;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: var(--r-sm);
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
    }
    .batch-btn:hover { background: var(--c-tint); color: var(--c-text); }
  `;
}
function ag() {
  return [og(), sg()].join(`
`);
}
function ig() {
  return `
    <style>${ag()}</style>
    <div class="popup" role="dialog" aria-label="Annotation properties">
      ${cg()}
      ${lg()}
      <div class="divider" data-region="divider-1" hidden></div>
      ${ug()}
      <div class="divider"></div>
      ${dg()}
      ${pg()}
      ${hg()}
      ${fg()}
    </div>
  `;
}
function cg() {
  return `
    <div class="header">
      <span class="label wide" data-region="caption">Annotation · 속성</span>
      <div class="header-right">
        <div class="format-painter-wrap">
          <button type="button" class="format-painter-btn" data-action="format-painter-toggle" data-region="format-painter" aria-haspopup="true" aria-expanded="false" aria-label="${A("copy.formatting")}" title="${A("copy.formatting")}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="4.5" y="3" width="15" height="5" rx="1.5"></rect>
              <rect x="6.5" y="8" width="11" height="2.6" rx="0.6"></rect>
              <path d="M11 10.6 v6.4 a1 1 0 0 0 2 0 V10.6"></path>
            </svg>
          </button>
          <div class="format-painter-menu" data-region="format-painter-menu" role="menu" hidden>
            <button type="button" class="batch-btn" role="menuitem" data-action="batch-apply" data-scope="step">${A("apply.this-step")}</button>
            <button type="button" class="batch-btn" role="menuitem" data-action="batch-apply" data-scope="scenario">${A("apply.all-steps")}</button>
          </div>
        </div>
        <div class="toggle" role="tablist" aria-label="Color palette mode">
          <button type="button" data-action="swatch-mode" data-mode="muted" aria-pressed="true">Muted</button>
          <button type="button" data-action="swatch-mode" data-mode="vibrant" aria-pressed="false">Vibrant</button>
        </div>
      </div>
    </div>
  `;
}
function lg() {
  var t;
  return `
    <div class="type-row" data-region="type-row" hidden>
      <select class="select" data-region="font">
        ${Cm((t = D()) == null ? void 0 : t.siteFonts).map(
    (n) => `<option value="${H(n.value)}" style="font-family: ${H(n.value)};">${n.label}</option>`
  ).join("")}
      </select>
      <input class="size-input" type="number" min="${Oo}" max="${Ro}" data-region="size" />
      <button type="button" class="type-btn" data-region="bold" aria-pressed="false" title="Bold">B</button>
      <button type="button" class="type-btn italic" data-region="italic" aria-pressed="false" title="Italic">I</button>
    </div>
  `;
}
function ug() {
  return `
    <div class="swatch-row" data-region="text-row">
      <span class="label" data-region="text-label">Text</span>
      <div class="swatches" data-region="text-swatches"></div>
    </div>
    <div class="swatch-row" data-region="bg-row">
      <span class="label" data-region="bg-label">Bg</span>
      <div class="swatches" data-region="bg-swatches"></div>
    </div>
    <div class="swatch-row" data-region="border-row" hidden>
      <span class="label" data-region="border-label">Border</span>
      <div class="swatches" data-region="border-swatches"></div>
    </div>
  `;
}
function dg() {
  return `
    <div class="width-row" data-region="width-row" hidden>
      <span class="label">Width</span>
      <input class="width-input" type="range" min="${No}" max="${Do}" step="1" data-region="width" />
      <span class="width-value" data-region="width-value">2</span>
    </div>
  `;
}
function pg() {
  return `
    <div class="row label-row">
      <span class="label">Effect</span>
      <div class="effect-controls">
        <select class="select" data-region="effect">
          ${Pm.map((e) => `<option value="${e.value}">${e.label}</option>`).join("")}
        </select>
        <button type="button" class="icon-btn" data-region="effect-play" title="Preview effect" aria-label="Preview effect">
          <svg width="9" height="9" viewBox="0 0 16 16" fill="currentColor"><path d="M 4 3 L 4 13 L 13 8 Z"/></svg>
        </button>
      </div>
    </div>
  `;
}
function hg() {
  return `
    <div class="alpha-row">
      <span class="label">Opacity</span>
      <div class="alpha-track-wrap">
        <div class="alpha-track" data-region="alpha-track">
          <div class="alpha-fill" data-region="alpha-fill"></div>
          <div class="alpha-thumb" data-region="alpha-thumb"></div>
        </div>
        <span class="alpha-value" data-region="alpha-value">100%</span>
      </div>
    </div>
  `;
}
function fg() {
  return `
    <div class="anchor-tick">
      <svg viewBox="0 0 12 6" width="12" height="6">
        <path d="M 0 0 L 6 6 L 12 0 Z" fill="var(--c-surface)"/>
        <path d="M 0 0 L 6 6 L 12 0" fill="none" stroke="var(--c-border)" stroke-width="1"/>
      </svg>
    </div>
  `;
}
function jn(e, t, n) {
  E(e) && (S.activeId = e, S.activeKind = n, S.activeAnchorSelector = ng(n, e), S.host || _g(), Un(), zo(t), rg(n, e), document.dispatchEvent(
    new CustomEvent("manuscript:annotation-selected", { detail: { id: e } })
  ));
}
function Ho() {
  var e;
  S.host && ((e = S.unsubscribeScenario) == null || e.call(S), S.unsubscribeScenario = null, Se(), $n(), S.host.remove(), S.host = null, S.shadow = null, S.activeId = null, S.activeKind = null, S.activeAnchorSelector = null, document.dispatchEvent(
    new CustomEvent("manuscript:annotation-selected", { detail: { id: null } })
  ));
}
function mg(e, t) {
  jn(e, t, "text");
}
function gg(e, t) {
  jn(e, t, "shape");
}
function bg(e, t) {
  jn(e, t, "freedraw");
}
function _g() {
  const { host: e, shadow: t } = Ue();
  e.setAttribute("data-popup", "annotation-editor"), e.style.cssText = [
    "position: fixed",
    `z-index: ${te + 5}`,
    "pointer-events: auto"
  ].join("; "), t.innerHTML = ig(), S.host = e, S.shadow = t, document.body.appendChild(e), Xm(Ho), S.unsubscribeScenario = ot(yg);
}
function yg() {
  const { activeId: e, host: t, activeAnchorSelector: n } = S;
  if (!e || !t) return;
  if (!E(e)) {
    Ho();
    return;
  }
  if (Un(), n) {
    const o = document.querySelector(n);
    o && zo(o);
  }
}
const v = {
  state: null,
  unsubscribeStep: null
};
function lt() {
  return v.state !== null;
}
function Vn() {
  var e;
  return ((e = v.state) == null ? void 0 : e.standalone) === !0;
}
function vg(e, t) {
  const { svg: n } = M;
  if (!n) return;
  const r = Vt(e, t), o = xg(e, r), s = r.map((c) => `${c.x},${c.y}`).join(" "), i = document.createElementNS(Dt, "polyline");
  if (i.setAttribute("points", s), i.setAttribute("fill", "none"), i.setAttribute("stroke", e.stroke), i.setAttribute("stroke-width", String(e.strokeWidth)), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-linejoin", "round"), i.setAttribute(pr, e.id), e.strokeOpacity !== void 0 && e.strokeOpacity < 1 && i.setAttribute("stroke-opacity", String(Math.max(0, Math.min(1, e.strokeOpacity)))), o && i.setAttribute("transform", o), i.style.pointerEvents = "none", Qe(i, e.entryAnimation, e.rotate ?? 0), n.appendChild(i), Vn()) return;
  const a = document.createElementNS(Dt, "polyline");
  a.setAttribute(pr, e.id), a.setAttribute("points", s), a.setAttribute("fill", "none"), a.setAttribute("stroke", "transparent"), a.setAttribute("stroke-width", String(Math.max(12, e.strokeWidth + 10))), a.setAttribute("stroke-linecap", "round"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("pointer-events", "stroke"), o && a.setAttribute("transform", o), a.style.cursor = "pointer", a.addEventListener("mousedown", (c) => {
    c.button === 0 && (c.stopPropagation(), c.preventDefault(), wg(e.id, c, a));
  }), n.appendChild(a);
}
function xg(e, t) {
  const n = e.rotate ?? 0;
  if (!n || t.length === 0) return "";
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const l of t)
    l.x < r && (r = l.x), l.y < o && (o = l.y), l.x > s && (s = l.x), l.y > i && (i = l.y);
  const a = (r + s) / 2, c = (o + i) / 2;
  return `rotate(${n} ${a} ${c})`;
}
function wg(e, t, n) {
  const r = E(e);
  if (!r || r.kind !== "freedraw") return;
  const o = { x: t.clientX, y: t.clientY }, s = J(), i = Vt(r, s).map((u) => ({ ...u }));
  let a = !1;
  const c = (u) => {
    const h = u.clientX - o.x, d = u.clientY - o.y;
    if (!a && Math.hypot(h, d) < 3) return;
    a = !0, u.preventDefault();
    const p = i.map((m) => ({ x: m.x + h, y: m.y + d })), f = s ? {
      points: p,
      pointsAnchorOffset: p.map((m) => ({
        x: m.x - s.left,
        y: m.y - s.top
      }))
    } : { points: p, pointsAnchorOffset: void 0 };
    L(e, f);
  }, l = () => {
    document.removeEventListener("mousemove", c, !0), document.removeEventListener("mouseup", l, !0);
    const u = document.querySelectorAll(`[data-annotation-freedraw="${e}"]`), h = u[u.length - 1] ?? n;
    bg(e, h);
  };
  document.addEventListener("mousemove", c, !0), document.addEventListener("mouseup", l, !0);
}
const ut = "http://www.w3.org/2000/svg";
function kg(e, t) {
  let n;
  switch (e) {
    case "rectangle":
      n = Sg(t);
      break;
    case "ellipse":
      n = $g(t);
      break;
    case "triangle":
      n = vt(Eg(t), t);
      break;
    case "diamond":
      n = vt(Lg(t), t);
      break;
    case "star":
      n = vt(Tg(t), t);
      break;
    case "callout":
      n = Mg(Cg(t), t);
      break;
    case "line":
      n = Ag(t);
      break;
    case "block-arrow":
      n = vt(Pg(t), t);
      break;
  }
  if (n && t.rotate) {
    const r = t.x + t.width / 2, o = t.y + t.height / 2;
    n.setAttribute("transform", `rotate(${t.rotate} ${r} ${o})`);
  }
  return n;
}
function Sg(e) {
  const t = document.createElementNS(ut, "rect");
  return t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("width", String(e.width)), t.setAttribute("height", String(e.height)), Xt(t, e), t;
}
function $g(e) {
  const t = document.createElementNS(ut, "ellipse");
  return t.setAttribute("cx", String(e.x + e.width / 2)), t.setAttribute("cy", String(e.y + e.height / 2)), t.setAttribute("rx", String(Math.max(0, e.width / 2))), t.setAttribute("ry", String(Math.max(0, e.height / 2))), Xt(t, e), t;
}
function Ag(e) {
  const t = document.createElementNS(ut, "line");
  return t.setAttribute("x1", String(e.x)), t.setAttribute("y1", String(e.y)), t.setAttribute("x2", String(e.x + e.width)), t.setAttribute("y2", String(e.y + e.height)), t.setAttribute("stroke", e.stroke || "#000000"), t.setAttribute("stroke-width", String(e.strokeWidth)), t.setAttribute("stroke-linecap", "round"), t.setAttribute("fill", "none"), t;
}
function vt(e, t) {
  const n = document.createElementNS(ut, "polygon");
  return n.setAttribute("points", e), Xt(n, t), n.setAttribute("stroke-linejoin", "round"), n;
}
function Mg(e, t) {
  const n = document.createElementNS(ut, "path");
  return n.setAttribute("d", e), Xt(n, t), n.setAttribute("stroke-linejoin", "round"), n;
}
function Xt(e, t) {
  e.setAttribute("fill", t.fill || "transparent"), e.setAttribute("stroke", t.stroke || "transparent"), e.setAttribute("stroke-width", String(t.strokeWidth)), t.fillOpacity !== void 0 && t.fillOpacity < 1 && e.setAttribute("fill-opacity", String(Math.max(0, Math.min(1, t.fillOpacity))));
}
function Eg(e) {
  const t = e.x, n = e.x + e.width, r = e.y, o = e.y + e.height;
  return `${(t + n) / 2},${r} ${n},${o} ${t},${o}`;
}
function Lg(e) {
  const t = e.x + e.width / 2, n = e.y + e.height / 2;
  return `${t},${e.y} ${e.x + e.width},${n} ${t},${e.y + e.height} ${e.x},${n}`;
}
function Tg(e) {
  const t = e.x + e.width / 2, n = e.y + e.height / 2, r = Math.min(e.width, e.height) / 2, o = r * 0.5, s = [];
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 5 * i - Math.PI / 2, c = i % 2 === 0 ? r : o;
    s.push(`${t + Math.cos(a) * c},${n + Math.sin(a) * c}`);
  }
  return s.join(" ");
}
function Cg(e) {
  const t = Math.min(10, e.width / 4, e.height / 4), n = Math.min(18, e.height * 0.2), r = e.y + e.height - n, o = e.x + e.width * 0.32, s = e.x + e.width * 0.5, i = e.x + e.width * 0.22, a = e.y + e.height;
  return [
    `M ${e.x + t} ${e.y}`,
    `L ${e.x + e.width - t} ${e.y}`,
    `Q ${e.x + e.width} ${e.y} ${e.x + e.width} ${e.y + t}`,
    `L ${e.x + e.width} ${r - t}`,
    `Q ${e.x + e.width} ${r} ${e.x + e.width - t} ${r}`,
    `L ${s} ${r}`,
    `L ${i} ${a}`,
    `L ${o} ${r}`,
    `L ${e.x + t} ${r}`,
    `Q ${e.x} ${r} ${e.x} ${r - t}`,
    `L ${e.x} ${e.y + t}`,
    `Q ${e.x} ${e.y} ${e.x + t} ${e.y}`,
    "Z"
  ].join(" ");
}
function Pg(e) {
  const t = e.x + e.width / 2, n = e.y + e.height * 0.45, r = Math.min(e.width / 2, e.width * 0.22);
  return [
    `${t},${e.y}`,
    `${e.x + e.width},${n}`,
    `${t + r},${n}`,
    `${t + r},${e.y + e.height}`,
    `${t - r},${e.y + e.height}`,
    `${t - r},${n}`,
    `${e.x},${n}`
  ].join(" ");
}
function Ig(e, t) {
  const { svg: n } = M;
  if (!n) return;
  const r = jt(e, t), o = kg(e.shapeKind, {
    x: r.x,
    y: r.y,
    width: e.bounds.width,
    height: e.bounds.height,
    fill: e.fill,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fillOpacity: e.fillOpacity,
    rotate: e.rotate
  });
  o && (o.setAttribute(uo, e.id), o.style.pointerEvents = "none", Qe(o, e.entryAnimation, e.rotate ?? 0), n.appendChild(o), Vn() || n.appendChild(Og(e, r)));
}
function Og(e, t) {
  const n = document.createElementNS(Dt, "rect");
  if (n.setAttribute(uo, e.id), n.setAttribute("x", String(t.x)), n.setAttribute("y", String(t.y)), n.setAttribute("width", String(Math.max(0, e.bounds.width))), n.setAttribute("height", String(Math.max(0, e.bounds.height))), n.setAttribute("fill", "rgba(0, 0, 0, 0.001)"), n.setAttribute("stroke", "none"), n.setAttribute("pointer-events", "all"), n.style.pointerEvents = "all", n.style.cursor = "pointer", e.rotate) {
    const r = t.x + e.bounds.width / 2, o = t.y + e.bounds.height / 2;
    n.setAttribute("transform", `rotate(${e.rotate} ${r} ${o})`);
  }
  return n.addEventListener("mousedown", (r) => Rg(e.id, r, n)), n;
}
function Rg(e, t, n) {
  if (t.button !== 0) return;
  t.stopPropagation(), t.preventDefault();
  const r = { x: t.clientX, y: t.clientY }, o = E(e);
  if (!o || o.kind !== "shape") return;
  const s = J(), i = o.boundsAnchorOffset && s ? {
    x: s.left + o.boundsAnchorOffset.x,
    y: s.top + o.boundsAnchorOffset.y
  } : { x: o.bounds.x, y: o.bounds.y }, a = { ...o.bounds, x: i.x, y: i.y };
  let c = !1;
  const l = (h) => {
    const d = h.clientX - r.x, p = h.clientY - r.y;
    if (!c && Math.hypot(d, p) < 3) return;
    c = !0, h.preventDefault();
    const f = a.x + d, m = a.y + p, g = s ? {
      bounds: { ...a, x: f, y: m },
      boundsAnchorOffset: { x: f - s.left, y: m - s.top }
    } : {
      bounds: { ...a, x: f, y: m },
      boundsAnchorOffset: void 0
    };
    L(e, g);
  }, u = () => {
    document.removeEventListener("mousemove", l, !0), document.removeEventListener("mouseup", u, !0);
    const h = document.querySelectorAll(`[data-annotation-shape="${e}"]`), d = h[h.length - 1] ?? n;
    gg(e, d);
  };
  document.addEventListener("mousemove", l, !0), document.addEventListener("mouseup", u, !0);
}
function Ng(e, t) {
  const { host: n } = M;
  if (!n) return;
  const r = document.createElement("div");
  r.setAttribute(lo, e.id), r.setAttribute("data-manuscript", "ui"), r.dataset.annotationId = e.id;
  const o = e.style.italic === !0, s = e.style.backgroundColor ?? "#ffffff", i = e.style.backgroundOpacity ?? 0.96, a = s === "transparent" ? "transparent" : Dg(s, i), c = e.rotate ?? 0, l = e.style.borderColor ?? "#000000", u = l === "transparent" ? "none" : `2px solid ${l}`, h = Ef(e, t), d = Vn();
  r.style.cssText = [
    "position: absolute",
    `left: ${h.x}px`,
    `top: ${h.y}px`,
    `font-family: ${e.style.fontFamily}`,
    `font-size: ${e.style.fontSize}px`,
    `color: ${e.style.color}`,
    `font-weight: ${e.style.bold ? "700" : "400"}`,
    `font-style: ${o ? "italic" : "normal"}`,
    "padding: 8px 12px",
    `background: ${a}`,
    `border: ${u}`,
    "border-radius: 8px",
    d ? "pointer-events: none" : "pointer-events: auto",
    d ? "cursor: default" : "cursor: move",
    "user-select: none",
    "box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)",
    "max-width: 320px",
    "word-wrap: break-word",
    "line-height: 1.4",
    `transform: rotate(${c}deg)`,
    "transform-origin: center center"
  ].join("; "), r.textContent = e.text, d || Bg(r, e.id), Qe(r, e.entryAnimation, e.rotate ?? 0), n.appendChild(r);
}
function Dg(e, t) {
  const n = Math.max(0, Math.min(1, t)), r = e.trim();
  if (r.startsWith("#")) {
    let o = 0, s = 0, i = 0;
    return r.length === 4 ? (o = parseInt(r[1] + r[1], 16), s = parseInt(r[2] + r[2], 16), i = parseInt(r[3] + r[3], 16)) : r.length === 7 && (o = parseInt(r.slice(1, 3), 16), s = parseInt(r.slice(3, 5), 16), i = parseInt(r.slice(5, 7), 16)), `rgba(${o}, ${s}, ${i}, ${n})`;
  }
  return e;
}
function Bg(e, t) {
  let n = !1, r = 0, o = 0, s = 0, i = 0, a = !1;
  e.addEventListener("mousedown", (c) => {
    if (e.isContentEditable) return;
    n = !0, a = !1, r = c.clientX, o = c.clientY;
    const l = e.getBoundingClientRect();
    s = l.left, i = l.top, c.preventDefault();
  }), document.addEventListener("mousemove", (c) => {
    if (!n) return;
    const l = c.clientX - r, u = c.clientY - o;
    Math.abs(l) + Math.abs(u) > 2 && (a = !0), e.style.left = `${s + l}px`, e.style.top = `${i + u}px`;
  }), document.addEventListener("mouseup", () => {
    if (!n || (n = !1, !a)) return;
    const c = parseFloat(e.style.left), l = parseFloat(e.style.top), u = J(), h = u ? {
      position: { x: c, y: l },
      anchorOffset: { x: c - u.left, y: l - u.top }
    } : { position: { x: c, y: l }, anchorOffset: void 0 };
    L(t, h);
  }), e.addEventListener("click", (c) => {
    a || e.isContentEditable || (c.stopPropagation(), mg(t, e));
  }), e.addEventListener("dblclick", () => {
    e.contentEditable = "true", e.style.cursor = "text", e.focus(), qg(e);
  }), e.addEventListener("blur", () => {
    e.isContentEditable && (e.contentEditable = "false", e.style.cursor = "move", L(t, { text: e.textContent ?? "" }));
  }), e.addEventListener("keydown", (c) => {
    c.key === "Escape" && e.isContentEditable && e.blur();
  });
}
function qg(e) {
  const t = document.createRange();
  t.selectNodeContents(e), t.collapse(!1);
  const n = window.getSelection();
  n && (n.removeAllRanges(), n.addRange(t));
}
function Wo() {
  if (M.host) return;
  Sf();
  const e = document.createElement("div");
  e.setAttribute("data-manuscript", "ui"), e.style.cssText = [
    "position: fixed",
    "top: 0",
    "left: 0",
    "width: 100vw",
    "height: 100vh",
    "pointer-events: none",
    `z-index: ${te + 3}`
  ].join("; ");
  const t = document.createElementNS(Dt, "svg");
  t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t.style.cssText = [
    "position: absolute",
    "top: 0",
    "left: 0",
    "pointer-events: none",
    "overflow: visible"
  ].join("; "), e.appendChild(t), M.host = e, M.svg = t, M.roughSvg = kf.svg(t), document.body.appendChild(e), M.unsubscribe = ot(At), M.unsubscribeMode = Kr(At), Fg(), At();
}
let De = null;
function Ke() {
  De === null && (De = requestAnimationFrame(() => {
    De = null, At();
  }));
}
let ve = null, Mn = null;
function Fg() {
  window.addEventListener("resize", Ke), window.addEventListener("scroll", Ke, !0), typeof ResizeObserver < "u" && (ve = new ResizeObserver(Ke));
}
function zg() {
  window.removeEventListener("resize", Ke), window.removeEventListener("scroll", Ke, !0), ve && (ve.disconnect(), ve = null), Mn = null, De !== null && (cancelAnimationFrame(De), De = null);
}
function Hg() {
  var e, t;
  (e = M.unsubscribe) == null || e.call(M), M.unsubscribe = null, (t = M.unsubscribeMode) == null || t.call(M), M.unsubscribeMode = null, zg(), M.host && (M.host.remove(), M.host = null, M.svg = null, M.roughSvg = null);
}
function Uo() {
  return M.host !== null;
}
function At() {
  const { host: e, svg: t } = M;
  if (!e || !t) return;
  for (e.querySelectorAll(`[${lo}]`).forEach((o) => o.remove()); t.firstChild; ) t.removeChild(t.firstChild);
  const n = J();
  if (ve) {
    let o = null;
    try {
      o = Wg();
    } catch {
      o = null;
    }
    o !== Mn && (ve.disconnect(), o && ve.observe(o), Mn = o);
  }
  const r = Gr();
  for (const o of r)
    o.kind === "text" ? Ng(o, n) : o.kind === "arrow" ? Tf(o, n) : o.kind === "shape" ? Ig(o, n) : o.kind === "freedraw" && vg(o, n);
}
function Wg() {
  const e = pe();
  if (!(e != null && e.selectors)) return null;
  try {
    return po(e.selectors);
  } catch {
    return null;
  }
}
function Pe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
const y = {
  host: null,
  shadow: null,
  /**
   * Mount kicks off an async storage read for the saved orientation.
   * If the user clicks the orient toggle BEFORE that read resolves,
   * the user click must win — otherwise the async apply overwrites
   * their toggle.
   */
  orientationApplied: !1,
  cleanupDrag: null,
  /** Unsubscribe for the TTS autoplay-blocked signal (drives the orange
   *  muted speaker + "click for sound" hint). Set on mount, cleared on unmount. */
  cleanupBlocked: null
};
function jo(e) {
  const { shadow: t } = y;
  if (!t) return;
  const n = t.querySelector(".bar");
  if (!n) return;
  n.classList.toggle("vertical", e === "vertical");
  const r = t.querySelector('[data-region="orient-icon"]');
  r && (r.innerHTML = Gg()), jg(), Bt();
}
const Ug = 12;
function Bt() {
  const { host: e, shadow: t } = y;
  if (!e || !t) return;
  const n = t.querySelector(".bar");
  if (!n) return;
  if (!n.classList.contains("vertical")) {
    n.classList.remove("progress-right");
    return;
  }
  const r = e.getBoundingClientRect();
  n.classList.toggle("progress-right", r.left < Ug);
}
function jg() {
  const { host: e } = y;
  if (!e || e.style.transform !== "none") return;
  const t = e.getBoundingClientRect(), n = Math.max(0, window.innerWidth - t.width), r = Math.max(0, window.innerHeight - t.height), o = parseFloat(e.style.left), s = parseFloat(e.style.top);
  Number.isFinite(o) && (e.style.left = `${Pe(o, 0, n)}px`), Number.isFinite(s) && (e.style.top = `${Pe(s, 0, r)}px`);
}
async function Vo() {
  try {
    return await W().get(U.replayControlsOrientation) === "vertical" ? "vertical" : "horizontal";
  } catch {
    return "horizontal";
  }
}
async function Vg(e) {
  try {
    await W().set(U.replayControlsOrientation, e);
  } catch (t) {
    console.warn("[manuscript] save orientation failed", t);
  }
}
function Gg() {
  return '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 5.5 1.5 L 3 4 L 5.5 6.5 M 3 4 L 12 4 L 12 13 M 9.5 10.5 L 12 13 L 14.5 10.5"/></svg>';
}
async function Go() {
  try {
    const e = await W().get(U.replayControlsPosition);
    return e && typeof e == "object" && typeof e.left == "number" && typeof e.top == "number" ? e : null;
  } catch {
    return null;
  }
}
async function vr(e) {
  try {
    await W().set(U.replayControlsPosition, e);
  } catch {
  }
}
function Yg(e, t) {
  const n = e.getBoundingClientRect(), r = Math.max(0, Math.min(t.left, window.innerWidth - n.width)), o = Math.max(0, Math.min(t.top, window.innerHeight - n.height));
  e.style.left = `${r}px`, e.style.top = `${o}px`, e.style.bottom = "auto", e.style.transform = "none";
}
function Xg() {
  const { host: e, shadow: t } = y;
  if (!e || !t) return;
  const n = t.querySelector('[data-region="move-handle"]');
  if (!n) return;
  let r = !1, o = 0, s = 0, i = 0, a = 0;
  const c = (d) => {
    if (!y.host) return;
    d.preventDefault(), d.stopPropagation(), r = !0, n.classList.add("dragging");
    const p = y.host.getBoundingClientRect();
    y.host.style.left = `${p.left}px`, y.host.style.top = `${p.top}px`, y.host.style.bottom = "auto", y.host.style.transform = "none", o = d.clientX, s = d.clientY, i = p.left, a = p.top, document.addEventListener("mousemove", l, !0), document.addEventListener("mouseup", u, !0);
  }, l = (d) => {
    if (!r || !y.host) return;
    const p = y.host.getBoundingClientRect(), f = d.clientX - o, m = d.clientY - s, g = Pe(i + f, 0, window.innerWidth - p.width), _ = Pe(a + m, 0, window.innerHeight - p.height);
    y.host.style.left = `${g}px`, y.host.style.top = `${_}px`, Bt();
  }, u = () => {
    r = !1, n.classList.remove("dragging"), document.removeEventListener("mousemove", l, !0), document.removeEventListener("mouseup", u, !0);
    const d = y.host;
    if (d) {
      const p = parseFloat(d.style.left || "0"), f = parseFloat(d.style.top || "0");
      Number.isFinite(p) && Number.isFinite(f) && vr({ left: p, top: f });
    }
  }, h = () => {
    if (y.host && y.host.style.transform === "none") {
      const d = y.host.getBoundingClientRect(), p = Pe(d.left, 0, window.innerWidth - d.width), f = Pe(d.top, 0, window.innerHeight - d.height);
      y.host.style.left = `${p}px`, y.host.style.top = `${f}px`, vr({ left: p, top: f }), Bt();
    }
  };
  n.addEventListener("mousedown", c), window.addEventListener("resize", h), y.cleanupDrag = () => {
    n.removeEventListener("mousedown", c), window.removeEventListener("resize", h), document.removeEventListener("mousemove", l, !0), document.removeEventListener("mouseup", u, !0);
  };
}
function Yo() {
  return `
    ${it()}
    :host {
      display: block;
      font-family: var(--ff-sans);
      color: var(--c-text);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .modal {
      background: var(--c-surface);
      border-radius: var(--r-md);
      padding: 22px 24px 20px;
      max-width: 420px;
      font-size: var(--fs-body);
      line-height: var(--lh-body);
      box-shadow: var(--shadow-lg);
      border-top: 3px solid var(--c-error);
    }
    .modal-head {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-circle {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: color-mix(in oklab, var(--c-error) 14%, transparent);
      color: var(--c-error);
      display: grid;
      place-items: center;
      font-size: 16px;
      font-weight: 600;
      flex-shrink: 0;
    }
    h2 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: var(--c-text);
    }
    p {
      margin: 4px 0 0;
      color: var(--c-text-mute);
      font-size: 13px;
      line-height: 1.5;
    }
    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 14px;
      flex-wrap: wrap;
    }
    button {
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: var(--r-sm);
      cursor: pointer;
    }
    .primary {
      background: var(--c-primary);
      color: var(--c-primary-fg);
      border: none;
    }
    .primary:hover { background: var(--c-primary-h); }
    .secondary {
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border-strong);
    }
    .secondary:hover { border-color: var(--c-text-mute); }
    button:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .url {
      display: block;
      font-family: var(--ff-mono);
      font-size: 12px;
      background: var(--c-surface-2);
      padding: 8px 10px;
      border-radius: var(--r-sm);
      word-break: break-all;
      margin: 12px 0 0 40px;
      color: var(--c-text);
    }
  `;
}
function Kg(e, t) {
  const { shadow: n } = y;
  if (!n) return;
  const r = n.querySelector('[data-region="step-popup"]');
  r && (r.innerHTML = e.map((o, s) => {
    const i = o.name && o.name.length > 0 ? o.name : "Step Name";
    return `<li class="step-item${s === t ? " active" : ""}" role="option" data-action="step-jump" data-index="${s}" aria-selected="${s === t}" title="${H(i)}">${s + 1}. ${xo(i)}</li>`;
  }).join(""));
}
function Zg() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector('[data-region="step-popup"]');
  if (!t) return;
  t.hidden = !t.hidden;
  const n = e.querySelector('[data-region="counter"]');
  if (n == null || n.setAttribute("aria-expanded", String(!t.hidden)), !t.hidden) {
    const r = t.querySelector(".step-item.active");
    r && typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest" });
  }
}
function En() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector('[data-region="step-popup"]');
  t && (t.hidden = !0);
  const n = e.querySelector('[data-region="counter"]');
  n == null || n.setAttribute("aria-expanded", "false");
}
function Xo(e) {
  const { host: t, shadow: n } = y;
  if (!t || !n) return;
  const r = n.querySelector('[data-region="step-popup"]');
  !r || r.hidden || e.target instanceof Node && t.contains(e.target) || En();
}
let Mt = -1, Et = !1;
function Jg() {
  Mt = -1, Et = !1;
}
function Qg(e, t, n, r = 0) {
  const { shadow: o } = y;
  if (!o) return;
  const s = o.querySelector('[data-region="progress"]');
  if (!s) return;
  if (t === null || t <= 0) {
    s.classList.add("hidden"), s.innerHTML = "", Mt = -1, Et = !1;
    return;
  }
  s.classList.remove("hidden");
  const c = e !== Mt || Et && !n;
  Mt = e, Et = n;
  let l = s.querySelector(".progress-fill");
  if (!l || c) {
    l == null || l.remove(), l = document.createElement("div"), l.className = "progress-fill", l.style.animationDuration = `${t}ms`;
    const u = Math.max(0, Math.min(r, t - 1));
    u > 0 && (l.style.animationDelay = `-${u}ms`), s.appendChild(l);
  }
  l.classList.toggle("paused", n);
}
function e0() {
  return `
    ${it()}
    :host {
      display: block;
      font-family: var(--ff-sans);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .bar {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 6px 8px 14px;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-pill);
      box-shadow: var(--shadow-md);
      opacity: 0.45;
      transition: opacity 0.15s;
    }

    /* Horizontal mode: progress strip floats above the pill so the user
       can see remaining time without it crowding the controls. Vertical
       mode keeps its side strip inside the pill (see .bar.vertical .progress). */
    .progress {
      position: absolute;
      left: 50%;
      right: auto;
      top: auto;
      bottom: calc(100% + 6px);
      width: calc(100% - 28px);
      height: 4px;
      transform: translateX(-50%);
      border: 1px solid color-mix(in oklch, currentColor, transparent 40%);
      border-radius: 2px;
      overflow: hidden;
      background: transparent;
      pointer-events: none;
    }
    .progress.hidden { display: none; }
    .progress-fill {
      height: 100%;
      width: 100%;
      background: #0a99ff;
      transform: scaleX(0);
      transform-origin: left center;
      animation-name: progress-grow-x;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    .progress-fill.paused { animation-play-state: paused; }
    @keyframes progress-grow-x {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    /* Mirror of the horizontal strip: float OUTSIDE the pill (to the left),
       running parallel to the column's long axis — same 4px thickness, 6px
       gap, and end-inset (28px) as the horizontal bar floats above. Keeping
       it inside the narrow column crowded the buttons; outside reads as a
       clean side gauge. Flip to the right by swapping 'right' for 'left'. */
    .bar.vertical .progress {
      left: auto;
      right: calc(100% + 6px);
      top: 50%;
      bottom: auto;
      width: 4px;
      height: calc(100% - 28px);
      transform: translateY(-50%);
    }
    /* Docked against the left wall there's no room for the left-outside
       strip — JS toggles .progress-right (see updateProgressSide) to float
       it on the right instead. */
    .bar.vertical.progress-right .progress {
      right: auto;
      left: calc(100% + 6px);
    }
    .bar.vertical .progress-fill {
      transform: scaleY(0);
      transform-origin: center top;
      animation-name: progress-grow-y;
    }
    @keyframes progress-grow-y {
      from { transform: scaleY(0); }
      to   { transform: scaleY(1); }
    }
    .bar:hover,
    .bar.paused,
    .bar:has([data-region="step-popup"]:not([hidden])) { opacity: 1; }

    .ctrl-tts.active { color: var(--c-primary); }

    /* Autoplay-blocked state: the browser is holding narration until the user
       clicks (no activation on a script-navigated page). Tint the muted speaker
       orange and float a bouncing "click anywhere for sound" hint above it. */
    .ctrl-tts { position: relative; }
    .ctrl-tts.blocked { color: var(--c-warning); }
    .bar:has(.ctrl-tts.blocked) { opacity: 1; }
    .tts-hint {
      position: absolute;
      bottom: calc(100% + 9px);
      left: 50%;
      transform: translateX(-50%);
      transform-origin: bottom center;
      background: var(--c-warning);
      color: #fff;
      font-family: var(--ff-sans);
      font-size: 11px;
      font-weight: 600;
      line-height: 1;
      white-space: nowrap;
      padding: 6px 9px;
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-md);
      pointer-events: none;
      z-index: 2;
      animation: tts-pudding 1.05s ease-in-out infinite;
    }
    .tts-hint[hidden] { display: none; }
    /* little downward nib pointing at the speaker */
    .tts-hint::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 4px solid transparent;
      border-top-color: var(--c-warning);
    }
    /* 띠용띠용 — squash before the jump, stretch up, land with a soft squash. */
    @keyframes tts-pudding {
      0%, 100% { transform: translateX(-50%) translateY(0)    scale(1, 1); }
      15%      { transform: translateX(-50%) translateY(0)    scale(1.12, 0.82); }
      40%      { transform: translateX(-50%) translateY(-7px) scale(0.9, 1.14); }
      60%      { transform: translateX(-50%) translateY(0)    scale(1.08, 0.9); }
      78%      { transform: translateX(-50%) translateY(-2px) scale(0.98, 1.03); }
    }
    @media (prefers-reduced-motion: reduce) {
      .tts-hint { animation: none; }
    }

    .counter {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      margin-right: 8px;
      opacity: 0.85;
      min-width: 36px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      padding: 2px 4px;
      border-radius: var(--r-xs);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .counter:hover { background: color-mix(in oklch, currentColor, transparent 92%); }
    [data-action="move-drag"] { cursor: grab; }
    [data-action="move-drag"].dragging { cursor: grabbing; }
    [data-action="move-drag"] svg { display: block; }

    /* 브랜드 펜촉 = 이동 핸들. 좌측 캡을 검정 원으로 덮되 알약 가장자리가
       2px 보이도록 외곽 높이(42px = 24 컨트롤 + 16 패딩 + 2 보더)보다 4px
       작은 38px 원을 좌/상/하 모두 2px 안쪽으로 들인다. 음수 마진으로 위치를
       당기되 세로 마진(-7)이 줄 높이를 24px(컨트롤과 동일)로 되돌려 바가
       세로로 커지지 않게 한다. */
    .mn-brand {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      cursor: grab;
      margin: -7px 6px -7px -13px;
    }
    .mn-brand svg { display: block; }
    .mn-brand.dragging,
    .mn-brand:active { cursor: grabbing; }

    .ctrl {
      background: transparent;
      border: none;
      color: inherit;
      font-family: inherit;
      font-size: 14px;
      line-height: 1;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-grid;
      place-items: center;
      padding: 0;
      transition: background 0.12s ease;
      flex-shrink: 0;
    }
    .ctrl:hover { background: color-mix(in oklch, currentColor, transparent 85%); }
    .ctrl:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .ctrl[disabled] { opacity: 0.4; cursor: not-allowed; }

    .divider {
      width: 1px;
      height: 16px;
      background: color-mix(in oklch, currentColor, transparent 80%);
      margin: 0 4px;
    }

    .ctrl-exit { opacity: 0.7; }
    .ctrl-exit:hover { opacity: 1; }

    [data-action="orient"] svg { display: block; }

    .step-popup {
      position: absolute;
      bottom: calc(100% + 6px);
      left: 0;
      margin: 0;
      padding: 6px 0;
      list-style: none;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-md);
      max-height: 180px;
      overflow-y: auto;
      min-width: 210px;
      max-width: 300px;
      font-family: var(--ff-sans);
      font-size: 13px;
      line-height: 1.3;
      z-index: 1;
    }
    .step-popup[hidden] { display: none; }
    .step-popup::-webkit-scrollbar { width: 8px; }
    .step-popup::-webkit-scrollbar-track {
      background: color-mix(in oklch, currentColor, transparent 82%);
      border-radius: 999px;
    }
    .step-popup::-webkit-scrollbar-thumb {
      background: color-mix(in oklch, currentColor, transparent 45%);
      border-radius: 999px;
    }
    .step-popup::-webkit-scrollbar-thumb:hover {
      background: color-mix(in oklch, currentColor, transparent 25%);
    }
    .step-popup li {
      padding: 6px 14px;
      cursor: pointer;
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity 0.12s ease, background 0.12s ease;
    }
    .step-popup li:hover { background: color-mix(in oklch, currentColor, transparent 92%); opacity: 1; }
    .step-popup li.active { opacity: 1; font-weight: 600; }

    .bar.vertical {
      flex-direction: column;
      align-items: center;
      /* Strip floats outside now, so the column just needs slim symmetric
         side padding. */
      padding: 14px 6px 8px 6px;
      gap: 4px;
    }
    /* 세로 모드: 컬럼 폭은 컨트롤(24px)이 정한다(외곽 38px). 원은 그보다
       4px 작은 34px 로 상단 캡을 덮되 좌/우/상 2px 가장자리를 남긴다. 가로
       음수 마진(-5)으로 컬럼을 넓히지 않게 하고, 위로 -13 당겨 상단 2px
       인셋. counter 와 8px 간격을 위해 아래 4px. */
    .bar.vertical .mn-brand {
      width: 34px;
      height: 34px;
      margin: -13px -5px 4px -5px;
    }
    /* 카운터는 세로쓰기로 "2 / 9" 를 위→아래로 쌓아 컬럼을 좁게 유지한다. */
    .bar.vertical .counter {
      writing-mode: vertical-lr;
      text-orientation: upright;
      margin-right: 0;
      margin-bottom: 4px;
      min-width: 0;
      padding: 2px 0;
      letter-spacing: -1px;
    }
    .bar.vertical .divider {
      width: 16px;
      height: 1px;
      margin: 4px 0;
    }
  `;
}
let _e = null, Be = null, re = null, et = 0, Ie = null, ge = null, Ze = 0, tt = !1, Ko = 15, Zo = 0, Ln = !1, xr = !1, nt = null, hn = !1, Tn = !1;
const Cn = /* @__PURE__ */ new Set();
function rt(e) {
  if (Tn !== e) {
    Tn = e;
    for (const t of [...Cn]) t(e);
    W().set(U.ttsBlocked, e).catch(() => {
    });
  }
}
function t0() {
  return Tn;
}
function n0(e) {
  return Cn.add(e), () => Cn.delete(e);
}
function r0() {
  if (hn || typeof window > "u") return;
  hn = !0;
  const e = () => {
    window.removeEventListener("click", e), hn = !1, rt(!1);
    const t = nt;
    nt = null, t && Qo(t);
  };
  window.addEventListener("click", e);
}
async function o0() {
  xr || (xr = !0, Ln = await Gn(), l0((e) => {
    Ln = e;
  }));
}
function s0() {
  return Ln;
}
function Kt() {
  return typeof speechSynthesis > "u" ? null : speechSynthesis;
}
function a0(e, t) {
  if (t <= 0) return 0;
  if (t >= e.length) return e.length;
  let n = t;
  for (; n > 0 && !/\s/.test(e[n - 1] || ""); ) n--;
  return n;
}
async function Gn() {
  try {
    return await W().get(U.ttsEnabled) === !0;
  } catch {
    return !1;
  }
}
async function Jo(e) {
  try {
    await W().set(U.ttsEnabled, !!e);
  } catch {
  }
}
async function i0() {
  try {
    const e = await W().get(U.ttsVoiceName);
    return typeof e == "string" && e.length > 0 ? e : null;
  } catch {
    return null;
  }
}
async function c0(e) {
  try {
    e === null ? await W().remove(U.ttsVoiceName) : await W().set(U.ttsVoiceName, e);
  } catch {
  }
}
function l0(e) {
  return W().subscribe([U.ttsEnabled], (t, n) => {
    e(n === !0);
  });
}
function Yn() {
  var e;
  if (_e = null, Be = null, et = 0, Ie = null, tt = !1, Ze = 0, ge = null, nt = null, rt(!1), (e = Kt()) == null || e.cancel(), re) {
    const t = re;
    re = null, t(!1);
  }
}
function u0() {
  const e = Kt();
  if (e) {
    if (_e && Ie) {
      let t = et;
      if (!tt && Ze > 0) {
        const n = Date.now() - Ze, r = Math.round(n / 1e3 * Ko), o = Zo + r;
        t = a0(Ie, o);
      }
      ge = {
        text: Ie,
        charIndex: t
      };
    }
    if (_e = null, Be = null, et = 0, Ie = null, tt = !1, Ze = 0, nt = null, rt(!1), e.cancel(), re) {
      const t = re;
      re = null, t(!1);
    }
  }
}
function d0(e = 1500) {
  const t = Kt();
  if (!t) return Promise.resolve([]);
  const n = t.getVoices();
  return n.length > 0 ? Promise.resolve(n) : new Promise((r) => {
    let o = !1;
    const s = (a) => {
      o || (o = !0, t.removeEventListener("voiceschanged", i), r(a));
    }, i = () => s(t.getVoices());
    t.addEventListener("voiceschanged", i), setTimeout(() => s(t.getVoices()), e);
  });
}
function p0(e) {
  const t = (navigator.language || "").toLowerCase().split("-")[0];
  if (!t) return null;
  const n = e.filter(
    (r) => r.lang.toLowerCase().split("-")[0] === t
  );
  return n.find((r) => r.name.startsWith("Google")) ?? n[0] ?? null;
}
function Lt() {
  return Be;
}
function Qo(e) {
  const t = Kt();
  if (!t) return Promise.resolve(!1);
  const n = e.trim();
  if (n.length === 0) return Promise.resolve(!1);
  let r = n;
  if (ge && ge.text === n) {
    if (r = n.slice(ge.charIndex).trimStart(), ge = null, r.length === 0) return Promise.resolve(!0);
  } else
    ge = null, Yn();
  const o = n, s = o.length - r.length, i = (async () => {
    const a = await d0(), c = await i0();
    return new Promise((l) => {
      var m;
      re = l;
      const u = new SpeechSynthesisUtterance(r), h = c && a.find((g) => g.name === c) || p0(a);
      h && (u.voice = h, u.lang = h.lang), _e = u, Ie = o, et = s, tt = !1, Ze = Date.now(), Zo = s;
      const d = (u.lang || ((m = u.voice) == null ? void 0 : m.lang) || navigator.language || "en").toLowerCase().split("-")[0];
      Ko = (d === "ko" || d === "ja" || d === "zh" ? 7 : 14) * (u.rate || 1), u.addEventListener("boundary", (g) => {
        _e === u && (et = s + (g.charIndex || 0), tt = !0);
      });
      const f = (g) => {
        re === l && (re = null), _e === u && (_e = null), Be === i && (Be = null), l(g);
      };
      u.addEventListener("start", () => rt(!1)), u.addEventListener("end", () => f(!0)), u.addEventListener("error", (g) => {
        g.error === "not-allowed" && (nt = o, rt(!0), r0()), f(!1);
      }), t.speak(u);
    });
  })();
  return Be = i, i;
}
let Tt = !1;
function h0(e = 14) {
  return `<svg width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M 3 6 L 3 10 L 6 10 L 9 12.5 L 9 3.5 L 6 6 Z" fill="currentColor"/><path d="M 11 6 a 2.5 2.5 0 0 1 0 4"/><path d="M 12.5 4 a 5 5 0 0 1 0 8"/></svg>`;
}
function f0(e = 14) {
  return `<svg width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M 3 6 L 3 10 L 6 10 L 9 12.5 L 9 3.5 L 6 6 Z" fill="currentColor"/><path d="M 11 6 L 14 9 M 14 6 L 11 9"/></svg>`;
}
function m0(e) {
  Tt = e, es();
}
function wr() {
  es();
}
function es() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector('[data-action="tts-toggle"]');
  if (!t) return;
  const n = t0();
  t.setAttribute("aria-pressed", String(Tt)), t.classList.toggle("active", Tt && !n), t.classList.toggle("blocked", n);
  const r = t.querySelector('[data-region="tts-icon"]');
  r && (r.innerHTML = n || !Tt ? f0(14) : h0(14));
  const o = t.querySelector('[data-region="tts-hint"]');
  o && (o.hidden = !n);
}
function g0({ height: e = 16, color: t, title: n } = {}) {
  const r = Math.round(e * 0.7), o = t ?? "currentColor", s = n ? `<title>${b0(n)}</title>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20" width="${r}" height="${e}" fill="${o}" aria-hidden="${n ? "false" : "true"}" focusable="false">${s}<g fill-rule="evenodd"><path d="M 7 0.5 L 12.5 5 L 12.5 9.5 L 10 14 L 4 14 L 1.5 9.5 L 1.5 5 Z M 6.5 1.2 L 6.5 7.2 L 7.5 7.2 L 7.5 1.2 Z M 8.1 8.5 A 1.1 1.1 0 1 1 5.9 8.5 A 1.1 1.1 0 1 1 8.1 8.5 Z"/><rect x="3.5" y="15.5" width="7" height="2.8"/></g></svg>`;
}
function b0(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _0(e) {
  var r;
  if (y.host) return;
  const { host: t, shadow: n } = Ue();
  y.host = t, y.shadow = n, t.style.cssText = [
    "position: fixed",
    "bottom: 32px",
    "left: 50%",
    "transform: translateX(-50%)",
    `z-index: ${te + 6}`,
    "pointer-events: auto",
    // Recording flow already requested hidden — respect it on mount.
    ""
  ].filter(Boolean).join("; "), n.innerHTML = `<style>${e0()}</style>${y0()}`, n.addEventListener("click", (o) => v0(o, e)), document.body.appendChild(t), Xg(), document.addEventListener("mousedown", Xo, !0), (r = y.cleanupBlocked) == null || r.call(y), y.cleanupBlocked = n0(() => wr()), wr(), y.orientationApplied = !1, Vo().then((o) => {
    y.orientationApplied || (y.orientationApplied = !0, jo(o));
  }), Go().then((o) => {
    y.host && o && y.host.style.transform !== "none" && (Yg(y.host, o), Bt());
  });
}
function y0() {
  var n, r;
  const t = ((r = (n = ce()).isSupported) == null ? void 0 : r.call(n)) !== !1 ? `<button class="ctrl" data-action="prompter" aria-label="${A("replay.prompter-aria")}" title="${A("replay.prompter-title")}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" style="display:block"><rect x="2.5" y="3" width="11" height="9" rx="1"/><path d="M 4.5 5.8 L 11.5 5.8 M 4.5 8 L 11.5 8 M 4.5 10.2 L 9 10.2"/></svg></button>` : "";
  return `
    <div class="bar" role="toolbar" aria-label="${A("replay.counter-aria")}">
      <span class="mn-brand" data-region="move-handle" role="button" aria-label="${A("replay.move-aria")}" title="${A("replay.move-title")}">${g0({ height: 26 })}</span>
      <span class="counter" data-region="counter" aria-live="polite" role="button" aria-haspopup="listbox" aria-expanded="false" tabindex="0">1 / 1</span>
      <button class="ctrl" data-action="prev" aria-label="${A("replay.prev-aria")}">‹</button>
      <button class="ctrl" data-action="pause" aria-label="${A("replay.pause-aria")}"><span data-region="pause-icon">II</span></button>
      <button class="ctrl" data-action="next" aria-label="${A("replay.next-aria")}">›</button>
      <span class="divider" aria-hidden="true"></span>
      ${t}
      <button class="ctrl ctrl-tts" data-action="tts-toggle" aria-pressed="false" aria-label="${A("replay.tts-aria")}" title="${A("replay.tts-title")}" data-region="tts-toggle"><span data-region="tts-icon"></span><span class="tts-hint" data-region="tts-hint" role="status" hidden>${A("replay.tts-blocked-hint")}</span></button>
      <button class="ctrl" data-action="orient" aria-label="${A("replay.orient-aria")}" data-region="orient-icon"></button>
      <button class="ctrl ctrl-exit" data-action="exit" aria-label="${A("replay.exit-aria")}">×</button>
      <div class="progress hidden" data-region="progress" aria-hidden="true"></div>
      <ul class="step-popup" data-region="step-popup" role="listbox" hidden></ul>
    </div>
  `;
}
function v0(e, t) {
  var s;
  const n = e.target;
  if (!(n instanceof Element)) return;
  if (n.closest('[data-region="counter"]')) {
    Zg();
    return;
  }
  const r = n.closest('[data-action="step-jump"]');
  if (r) {
    const i = Number(r.getAttribute("data-index"));
    Number.isFinite(i) && (En(), t.onStepSelect(i));
    return;
  }
  if (n.closest('[data-action="tts-toggle"]')) {
    t.onToggleTts();
    return;
  }
  const o = (s = n.closest("[data-action]")) == null ? void 0 : s.getAttribute("data-action");
  switch (o && En(), o) {
    case "prev":
      t.onPrev();
      break;
    case "next":
      t.onNext();
      break;
    case "pause":
      t.onTogglePause();
      break;
    case "exit":
      t.onExit();
      break;
    case "prompter":
      t.onTogglePrompter();
      break;
    case "orient":
      x0();
      break;
  }
}
function x0() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector(".bar");
  if (!t) return;
  const n = t.classList.contains("vertical") ? "horizontal" : "vertical";
  y.orientationApplied = !0, jo(n), Vg(n);
}
function w0() {
  var e, t, n;
  (e = y.cleanupDrag) == null || e.call(y), y.cleanupDrag = null, (t = y.cleanupBlocked) == null || t.call(y), y.cleanupBlocked = null, document.removeEventListener("mousedown", Xo, !0), (n = y.host) == null || n.remove(), y.host = null, y.shadow = null, y.orientationApplied = !1, Jg();
}
function kr(e) {
  const { shadow: t } = y;
  if (!t) return;
  const n = t.querySelector('[data-region="counter"]');
  n && (n.textContent = `${e.currentIndex + 1} / ${e.total}`);
  const r = t.querySelector(".bar");
  r == null || r.classList.toggle("paused", e.paused);
  const o = t.querySelector('[data-region="pause-icon"]');
  o && (o.textContent = e.paused ? "▶" : "II");
  const s = t.querySelector('[data-action="prev"]');
  s && s.toggleAttribute("disabled", e.currentIndex <= 0);
  const i = t.querySelector('[data-action="next"]');
  i && (i.toggleAttribute("disabled", !1), i.setAttribute(
    "aria-label",
    e.currentIndex >= e.total - 1 ? A("replay.finish-aria") : A("replay.next-aria")
  )), Qg(
    e.currentIndex,
    e.timerDurationMs ?? null,
    e.paused,
    e.timerElapsedMs ?? 0
  ), Kg(e.steps ?? [], e.currentIndex), m0(e.ttsEnabled === !0);
}
let ae = null;
function k0(e) {
  dt();
  const { host: t, shadow: n } = Ue();
  ae = t, ae.style.cssText = [
    "position: fixed",
    "inset: 0",
    "background: rgba(0, 0, 0, 0.40)",
    `z-index: ${te + 7}`,
    "display: flex",
    "align-items: center",
    "justify-content: center",
    "pointer-events: auto"
  ].join("; "), n.innerHTML = `
    <style>${Yo()}</style>
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="nf-title">
      <div class="modal-head">
        <div class="icon-circle" aria-hidden="true">!</div>
        <div>
          <h2 id="nf-title">${A("replay.notfound.title")}</h2>
          <p>${A("replay.notfound.body")}</p>
        </div>
      </div>
      <div class="actions">
        <button class="secondary" data-action="stop">${A("replay.notfound.stop")}</button>
        <button class="primary" data-action="skip" autofocus>${A("replay.notfound.skip")} →</button>
      </div>
    </div>
  `, n.addEventListener("click", (o) => {
    var a;
    const s = o.target;
    if (!(s instanceof HTMLElement)) return;
    const i = (a = s.closest("[data-action]")) == null ? void 0 : a.getAttribute("data-action");
    i === "skip" ? e.onSkip() : i === "stop" && e.onStop();
  });
  const r = (o) => {
    o.key === "Enter" ? (o.preventDefault(), e.onSkip()) : o.key === "Escape" && (o.preventDefault(), e.onStop());
  };
  document.addEventListener("keydown", r, !0), ae.__cleanup = () => {
    document.removeEventListener("keydown", r, !0);
  }, document.body.appendChild(ae);
}
function dt() {
  if (!ae) return;
  const e = ae.__cleanup;
  e == null || e(), ae.remove(), ae = null;
}
let ie = null;
function S0(e) {
  qt();
  const { host: t, shadow: n } = Ue();
  ie = t, ie.style.cssText = [
    "position: fixed",
    "inset: 0",
    "background: rgba(0, 0, 0, 0.40)",
    `z-index: ${te + 7}`,
    "display: flex",
    "align-items: center",
    "justify-content: center",
    "pointer-events: auto"
  ].join("; "), n.innerHTML = `
    <style>
      ${Yo()}
      .modal { border-top-color: var(--c-info); max-width: 480px; }
      .icon-circle { background: color-mix(in oklab, var(--c-info) 14%, transparent); color: var(--c-info); }
    </style>
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="um-title">
      <div class="modal-head">
        <div class="icon-circle" aria-hidden="true">↗</div>
        <div>
          <h2 id="um-title">${A("replay.url-mismatch.title")}</h2>
          <p>${A("replay.url-mismatch.body")}</p>
        </div>
      </div>
      <span class="url" data-region="url"></span>
      <div class="actions">
        <button class="secondary" data-action="cancel">${A("replay.url-mismatch.cancel")}</button>
        <button class="secondary" data-action="force">${A("replay.url-mismatch.force")}</button>
        <button class="primary" data-action="navigate" autofocus>${A("replay.url-mismatch.navigate")} →</button>
      </div>
    </div>
  `;
  const r = n.querySelector('[data-region="url"]');
  r && (r.textContent = e.savedUrl), n.addEventListener("click", (s) => {
    var c;
    const i = s.target;
    if (!(i instanceof HTMLElement)) return;
    const a = (c = i.closest("[data-action]")) == null ? void 0 : c.getAttribute("data-action");
    a === "navigate" ? e.onNavigate() : a === "force" ? e.onForce() : a === "cancel" && e.onCancel();
  });
  const o = (s) => {
    s.key === "Escape" ? (s.preventDefault(), e.onCancel()) : s.key === "Enter" && (s.preventDefault(), e.onNavigate());
  };
  document.addEventListener("keydown", o, !0), ie.__cleanup = () => {
    document.removeEventListener("keydown", o, !0);
  }, document.body.appendChild(ie);
}
function qt() {
  if (!ie) return;
  const e = ie.__cleanup;
  e == null || e(), ie.remove(), ie = null;
}
let ye = null;
function ts(e) {
  pt();
  const t = e.getBoundingClientRect(), n = $0(e), r = t.left + n.x, o = t.top + n.y, s = t.bottom + n.y, i = 36, a = 8, c = o - a - i < 8, l = c ? Math.min(window.innerHeight - 8 - i, s + a) : Math.max(8, o - a - i), u = Math.max(8, Math.min(r, window.innerWidth - 200)), h = c ? "up" : "down", { host: d, shadow: p } = Ue();
  ye = d, ye.style.cssText = [
    "position: fixed",
    `top: ${l}px`,
    `left: ${u}px`,
    `z-index: ${te + 6}`,
    "pointer-events: none"
  ].join("; "), p.innerHTML = `
    <style>
      ${it()}
      :host { display: block; font-family: var(--ff-sans); }
      *, *::before, *::after { box-sizing: border-box; }
      .bubble {
        position: relative;
        font-size: 11px;
        font-weight: 500;
        color: var(--c-surface);
        background: var(--c-text);
        padding: 6px 10px;
        border-radius: var(--r-sm);
        box-shadow: var(--shadow-md);
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .eyebrow {
        opacity: 0.6;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .tip {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--c-text);
        transform: translateX(-50%) rotate(45deg);
        left: 50%;
      }
      .tip.down { bottom: -3px; }
      .tip.up { top: -3px; }
    </style>
    <div class="bubble">
      <span class="eyebrow">${A("prompter.action-step")}</span>
      <span>${A("replay.action-prompt")}</span>
      <span class="tip ${h}" aria-hidden="true"></span>
    </div>
  `, document.body.appendChild(ye);
}
function pt() {
  ye == null || ye.remove(), ye = null;
}
function $0(e) {
  var t;
  try {
    const n = (t = e.ownerDocument) == null ? void 0 : t.defaultView;
    if (!n || n === window) return { x: 0, y: 0 };
    const r = n.frameElement;
    if (!r) return { x: 0, y: 0 };
    const o = r.getBoundingClientRect();
    return { x: o.left, y: o.top };
  } catch {
    return { x: 0, y: 0 };
  }
}
let qe = null;
function A0(e) {
  qe || (qe = (t) => {
    if (v.state)
      switch (t.key) {
        case "ArrowRight":
          t.preventDefault(), e.onNext();
          break;
        case "ArrowLeft":
          t.preventDefault(), e.onPrev();
          break;
        case " ":
        case "Spacebar":
          t.preventDefault(), e.onTogglePause();
          break;
        case "Escape":
          t.preventDefault(), e.onExit();
          break;
      }
  }, document.addEventListener("keydown", qe, !0));
}
function M0() {
  qe && (document.removeEventListener("keydown", qe, !0), qe = null);
}
function ns(e, t, n = !1) {
  try {
    const r = new URL(e), o = new URL(t);
    return r.origin !== o.origin || r.pathname !== o.pathname ? !1 : n ? r.search === o.search && r.hash === o.hash : !0;
  } catch {
    return !1;
  }
}
function E0(e) {
  var n;
  const t = (n = e.steps[0]) == null ? void 0 : n.pickedAtUrl;
  return t && t.length > 0 ? t : e.url;
}
async function L0(e, t) {
  var r, o, s, i;
  const n = (r = e.steps[t]) == null ? void 0 : r.pickedAtUrl;
  if (!n || ns(n, location.href, !!e.strictUrlMatch)) return !1;
  if (((o = v.state) == null ? void 0 : o.standalone) === !0)
    return $s().tryHandoff({
      targetUrl: n,
      scenarioId: e.id,
      stepIndex: t,
      paused: ((s = v.state) == null ? void 0 : s.paused) ?? !1
    });
  try {
    await We().setActiveReplay({
      scenarioId: e.id,
      stepIndex: t,
      startedAt: Date.now(),
      paused: ((i = v.state) == null ? void 0 : i.paused) ?? !1
    });
  } catch (a) {
    console.warn("[manuscript] persist activeReplay before nav failed", a);
  }
  return location.href = n, !0;
}
function T0(e) {
  return new Promise((t) => {
    S0({
      savedUrl: e,
      onNavigate: () => t("navigate"),
      onForce: () => {
        qt(), t("force");
      },
      onCancel: () => {
        qt(), t("cancel");
      }
    });
  });
}
async function C0(e) {
  try {
    const t = await We().getActiveReplay();
    return (t == null ? void 0 : t.scenarioId) === e;
  } catch {
    return !1;
  }
}
async function Xn() {
  const e = D();
  if (!(!e || !v.state) && v.state.standalone !== !0)
    try {
      await We().setActiveReplay({
        scenarioId: e.id,
        stepIndex: B(),
        startedAt: Date.now(),
        paused: v.state.paused
      });
    } catch (t) {
      console.warn("[manuscript] persist activeReplay failed", t);
    }
}
async function rs(e, t, n) {
  const r = D();
  if (!r) return { ok: !1 };
  if (n && await C0(r.id)) return { ok: !0 };
  const o = E0(r);
  if (!o || ns(o, location.href, !!r.strictUrlMatch))
    return { ok: !0 };
  const s = await T0(o);
  return s === "cancel" ? { ok: !1 } : s === "navigate" ? (await We().setActiveReplay({
    scenarioId: e,
    stepIndex: t,
    startedAt: Date.now()
  }), location.href = o, { ok: !1 }) : { ok: !0 };
}
class os extends Error {
  constructor(t) {
    super("element-not-found"), this.chain = t, this.name = "ElementNotFoundError";
  }
}
function ss(e, t = Zr) {
  return P0(e, t).then((n) => n.el);
}
function P0(e, t = Zr) {
  const n = kn(e);
  return n ? Promise.resolve(n) : new Promise((r, o) => {
    let s = !1;
    const a = (ho(e.framePath) ?? document).body ?? document.body, c = new MutationObserver(() => {
      if (s) return;
      const u = kn(e);
      u && (s = !0, c.disconnect(), clearTimeout(l), r(u));
    }), l = setTimeout(() => {
      s || (s = !0, c.disconnect(), o(new os(e)));
    }, t);
    c.observe(a, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["data-testid", "data-test", "id", "aria-label"]
    });
  });
}
function Sr(e) {
  const t = {
    name: e.name,
    description: e.description,
    autoAdvanceMs: e.autoAdvanceMs ?? null,
    waitForNavigation: e.waitForNavigation,
    thumbnailDataUrl: e.thumbnailDataUrl ?? null
  }, n = e.subElements, r = e.subDwellsMs;
  return n && n.length > 0 && r && r.length === n.length + 1 && (t.primaryDwellMs = r[0] ?? 0, t.subs = n.map((o, s) => ({
    id: o.id,
    thumbnailDataUrl: o.thumbnailDataUrl,
    dwellMs: r[s + 1] ?? 0
  }))), t;
}
function $e() {
  const { state: e } = v;
  if (!e) return;
  const t = D();
  if (!t) return;
  const n = t.steps[B()], r = n && !n.waitForNavigation && n.autoAdvanceMs && n.autoAdvanceMs > 0 ? n.autoAdvanceMs : null;
  let o = 0;
  if (r !== null) {
    if (e.autoAdvanceResumeMs !== null)
      o = Math.max(0, r - e.autoAdvanceResumeMs);
    else if (e.subSeqResume && (n != null && n.subDwellsMs)) {
      const { idx: s, elapsedMs: i } = e.subSeqResume, a = n.subDwellsMs;
      let c = 0;
      const l = s + 1;
      for (let u = 0; u < l; u++) c += a[u] ?? 0;
      o = Math.max(0, Math.min(r, c + i));
    }
  }
  if (Gn().then((s) => {
    kr({
      currentIndex: B(),
      total: t.steps.length,
      paused: e.paused,
      timerDurationMs: r,
      timerElapsedMs: o,
      steps: t.steps.map((i) => ({ name: i.name })),
      ttsEnabled: s
    });
  }), kr({
    currentIndex: B(),
    total: t.steps.length,
    paused: e.paused,
    timerDurationMs: r,
    timerElapsedMs: o,
    steps: t.steps.map((s) => ({ name: s.name }))
  }), ce().isPrompterOpen() || Ss().isRecordingArmed()) {
    const s = B(), i = t.steps[s], a = t.steps[s + 1];
    ce().updatePrompter({
      scenarioId: t.id,
      scenarioName: t.name,
      currentIndex: s,
      total: t.steps.length,
      paused: e.paused,
      timerElapsedMs: o,
      steps: t.steps.map((c) => ({ name: c.name })),
      current: i ? Sr(i) : null,
      next: a ? Sr(a) : null
    });
  }
}
async function I0() {
  if (ce().isPrompterOpen()) {
    await ce().closePrompter(), Pn(!1);
    return;
  }
  Pn(!0), await ce().openPrompter(), $e();
}
function Pn(e) {
  var t;
  for (const n of document.querySelectorAll('[data-manuscript="ui"]'))
    if ((t = n.shadowRoot) != null && t.querySelector(".bar")) {
      n.style.display = e ? "none" : "";
      break;
    }
}
const O0 = 0.125;
function as(e, t = {}) {
  const { behavior: n } = t, r = window.innerHeight, o = e.getBoundingClientRect(), s = window.scrollY + o.top;
  let i;
  o.height > r ? i = s - r * O0 : i = s - (r - o.height) / 2, i = Math.max(0, Math.round(i)), window.scrollTo(n ? { top: i, behavior: n } : { top: i });
}
async function Zt(e) {
  var i, a;
  const { state: t } = v;
  if (!t) return;
  const n = D();
  if (!n) return;
  const r = n.steps[B()];
  if ($e(), !r) return;
  dt(), pt();
  const o = B();
  if (s0() && !t.paused && t.narratedStepIndex !== o && Qo(r.description).then((c) => {
    c && v.state && B() === o && (v.state.narratedStepIndex = o);
  }), !r.selectors) {
    _n(), r.waitForNavigation || Mr(e);
    return;
  }
  const s = new AbortController();
  t.pendingWait = s;
  try {
    const c = await ss(r.selectors);
    if (s.signal.aborted) return;
    as(c), Jr(c);
    const l = r.subElements ?? [];
    if (l.length > 0) {
      if (t.paused) return;
      const u = new AbortController();
      (i = t.subSequenceAbort) == null || i.abort(), t.subSequenceAbort = u, R0(c, r, l, u, e).finally(() => {
        var h;
        ((h = v.state) == null ? void 0 : h.subSequenceAbort) === u && (v.state.subSequenceAbort = null);
      });
      return;
    }
    r.waitForNavigation ? (ts(c), is(c, s, e.onNext)) : Mr(e);
  } catch (c) {
    if (s.signal.aborted) return;
    if (c instanceof os) {
      _n(), k0({
        onSkip: e.onNext,
        onStop: e.onExit
      });
      return;
    }
    console.error("[manuscript] replay error", c);
  } finally {
    ((a = v.state) == null ? void 0 : a.pendingWait) === s && (v.state.pendingWait = null);
  }
}
async function R0(e, t, n, r, o) {
  var p;
  const s = t.subDwellsMs ?? [], i = s[0] ?? 0;
  let a = e;
  const c = ((p = v.state) == null ? void 0 : p.subSeqResume) ?? null, l = (c == null ? void 0 : c.idx) ?? -1, u = (c == null ? void 0 : c.elapsedMs) ?? 0;
  if (v.state && (v.state.subSeqResume = null), l === -1) {
    $r(-1);
    const f = Math.max(0, i - u);
    if (await Ar(f, r.signal), r.signal.aborted) return;
  }
  const h = Math.max(0, l);
  for (let f = h; f < n.length; f++) {
    const m = n[f];
    if (!m) continue;
    let g;
    try {
      g = await ss(m.selectors);
    } catch (k) {
      console.warn("[manuscript] sub element not resolved, skipping", k);
      continue;
    }
    if (r.signal.aborted) return;
    as(g), ef(g, { durationMs: 350 }), a = g, $r(f);
    const _ = s[f + 1] ?? 0, b = f === l ? Math.max(0, _ - u) : _;
    if (await Ar(b, r.signal), r.signal.aborted) return;
  }
  if (v.state && (v.state.subSeqNodeIdx = null, v.state.subSeqNodeStartMs = null), t.waitForNavigation) {
    ts(a), is(a, r, o.onNext);
    return;
  }
  const d = Lt();
  d && (await Promise.race([
    d,
    new Promise((f) => {
      r.signal.aborted ? f() : r.signal.addEventListener("abort", () => f(), { once: !0 });
    })
  ]), r.signal.aborted) || !v.state || v.state.paused || o.onNext();
}
function $r(e) {
  const { state: t } = v;
  t && (t.subSeqNodeIdx = e, t.subSeqNodeStartMs = Date.now());
}
function Ar(e, t) {
  return e <= 0 ? Promise.resolve() : new Promise((n) => {
    const r = window.setTimeout(() => n(), e);
    t.addEventListener(
      "abort",
      () => {
        window.clearTimeout(r), n();
      },
      { once: !0 }
    );
  });
}
function is(e, t, n) {
  if (!v.state) return;
  const r = () => {
    e.removeEventListener("click", o, !0), t.signal.removeEventListener("abort", r);
  }, o = () => {
    r(), !(t.signal.aborted || !v.state) && n();
  };
  e.addEventListener("click", o, !0), t.signal.addEventListener("abort", r);
}
function Mr(e) {
  var c;
  const { state: t } = v;
  if (!t || t.paused) return;
  const n = D();
  if (!n) return;
  const r = B(), o = n.steps[r];
  if (!o) return;
  t.autoAdvanceTimer !== null && (window.clearTimeout(t.autoAdvanceTimer), t.autoAdvanceTimer = null), (c = t.autoAdvanceAbort) == null || c.abort();
  const s = new AbortController();
  t.autoAdvanceAbort = s;
  const i = t.autoAdvanceResumeMs;
  t.autoAdvanceResumeMs = null;
  const a = i ?? o.autoAdvanceMs;
  t.autoAdvanceDeadlineMs = a && a > 0 ? Date.now() + a : null, (async () => {
    const l = [], u = Lt();
    if (u && l.push(u), a && a > 0 && l.push(
      new Promise((p) => {
        const f = window.setTimeout(() => {
          v.state && v.state.autoAdvanceTimer === f && (v.state.autoAdvanceTimer = null), p();
        }, a);
        v.state && (v.state.autoAdvanceTimer = f), s.signal.addEventListener("abort", () => {
          window.clearTimeout(f), p();
        });
      })
    ), l.length === 0) return;
    const h = new Promise((p) => {
      s.signal.aborted ? p() : s.signal.addEventListener("abort", () => p(), { once: !0 });
    });
    if (await Promise.race([Promise.all(l).then(() => {
    }), h]), s.signal.aborted) return;
    let d = Lt();
    for (; d; ) {
      if (await Promise.race([d.then(() => {
      }), h]), s.signal.aborted) return;
      d = Lt();
    }
    !v.state || v.state.paused || B() === r && e.onNext();
  })();
}
function Jt(e = {}) {
  var n, r, o;
  const { state: t } = v;
  if (t) {
    if (e.pauseTts) {
      if (t.subSeqNodeIdx !== null && t.subSeqNodeStartMs !== null) {
        const s = Math.max(0, Date.now() - t.subSeqNodeStartMs);
        t.subSeqResume = { idx: t.subSeqNodeIdx, elapsedMs: s };
      }
      if (t.autoAdvanceDeadlineMs !== null) {
        const s = Math.max(0, t.autoAdvanceDeadlineMs - Date.now());
        t.autoAdvanceResumeMs = s > 0 ? s : null;
      }
    } else
      t.subSeqResume = null, t.autoAdvanceResumeMs = null, t.narratedStepIndex = null;
    t.subSeqNodeIdx = null, t.subSeqNodeStartMs = null, t.autoAdvanceDeadlineMs = null, t.autoAdvanceTimer !== null && (window.clearTimeout(t.autoAdvanceTimer), t.autoAdvanceTimer = null), (n = t.autoAdvanceAbort) == null || n.abort(), t.autoAdvanceAbort = null, (r = t.pendingWait) == null || r.abort(), t.pendingWait = null, (o = t.subSequenceAbort) == null || o.abort(), t.subSequenceAbort = null, e.pauseTts ? u0() : Yn();
  }
}
const Qt = {
  onNext: () => void Ft(),
  onExit: () => void zt()
};
async function Kn(e = 0, t = {}) {
  if (v.state) return;
  const n = D();
  if (!n || n.steps.length === 0 || t.standalone !== !0 && !(await rs(n.id, e, !0)).ok)
    return;
  v.state = {
    originalStepIndex: B(),
    paused: t.paused ?? !1,
    autoAdvanceTimer: null,
    pendingWait: null,
    autoAdvanceAbort: null,
    subSequenceAbort: null,
    subSeqNodeIdx: null,
    subSeqNodeStartMs: null,
    subSeqResume: null,
    autoAdvanceDeadlineMs: null,
    autoAdvanceResumeMs: null,
    narratedStepIndex: null,
    atEnd: !1,
    standalone: t.standalone === !0,
    dirtyStepIndex: null
  }, Xr("replay"), _0({
    onPrev: In,
    onNext: Ft,
    onTogglePause: On,
    onExit: zt,
    onStepSelect: (o) => void cs(o),
    onTogglePrompter: () => void I0(),
    onToggleTts: () => void N0()
  }), ce().isPrompterOpen() && Pn(!0), A0({
    onNext: () => void Ft(),
    onPrev: () => void In(),
    onTogglePause: On,
    onExit: () => void zt()
  }), v.unsubscribeStep = ot($e);
  const r = Math.min(Math.max(0, e), n.steps.length - 1);
  Wt(r), await Xn(), await Zt(Qt);
}
async function en(e) {
  if (!v.state) return;
  const t = D();
  t && (e < 0 || e >= t.steps.length || (Jt(), dt(), pt(), v.state.atEnd = !1, v.state.dirtyStepIndex = null, !await L0(t, e) && (Wt(e), await Xn(), await Zt(Qt))));
}
async function cs(e) {
  e !== B() && await en(e);
}
async function Ft() {
  const { state: e } = v;
  if (!e) return;
  const t = D();
  if (!t) return;
  const n = B();
  if (n >= t.steps.length - 1) {
    Jt(), dt(), pt(), e.paused = !0, e.atEnd = !0, $e(), document.dispatchEvent(new CustomEvent("manuscript:replay-end"));
    return;
  }
  await en(n + 1);
}
async function In() {
  await en(B() - 1);
}
async function N0() {
  const e = !await Gn();
  await Jo(e), e || Yn(), $e();
}
function On() {
  const { state: e } = v;
  if (!e) return;
  if (e.atEnd && e.paused) {
    D0();
    return;
  }
  if (e.paused && e.dirtyStepIndex === B()) {
    e.dirtyStepIndex = null, e.paused = !1, en(B()), $e();
    return;
  }
  e.paused = !e.paused, e.paused ? Jt({ pauseTts: !0 }) : Zt(Qt), $e();
}
async function D0() {
  if (!v.state) return;
  const e = D();
  !e || !(await rs(e.id, 0, !1)).ok || v.state && (v.state.paused = !1, v.state.atEnd = !1, Wt(0), await Xn(), await Zt(Qt));
}
async function zt() {
  var r;
  const { state: e } = v;
  if (!e) return;
  Jt(), dt(), pt(), qt(), _n(), w0(), ce().closePrompter(), M0(), (r = v.unsubscribeStep) == null || r.call(v), v.unsubscribeStep = null;
  const t = e.originalStepIndex, n = e.standalone === !0;
  v.state = null, Wt(t), Xr("idle"), await We().clearActiveReplay(), n && (Hg(), jh());
}
class xt extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "SchemaError";
  }
}
function Er(e, t = {}) {
  if (!ls(e))
    throw new xt("Root must be an object");
  const n = t.strict === !0, r = e.schemaVersion;
  let o;
  if (typeof r == "string")
    o = r;
  else {
    if (n)
      throw new xt("Missing schemaVersion field");
    console.warn(
      "[manuscript] schemaVersion missing on stored scenario — assuming 0.1.0",
      e
    ), o = "0.1.0";
  }
  let s = e;
  if (o === "0.1.0")
    s = B0(s), s = Lr(s);
  else if (o === "0.1.1")
    s = Lr(s);
  else if (o !== Hr)
    throw new xt(`Unsupported schemaVersion: ${o}`);
  if (!Array.isArray(s.steps))
    throw new xt("Missing or invalid steps array");
  return s;
}
function B0(e) {
  const t = e.steps, n = Array.isArray(t) ? t.map((r) => ls(r) ? {
    ...r,
    name: typeof r.name == "string" ? r.name : "",
    description: typeof r.description == "string" ? r.description : "",
    thumbnailDataUrl: typeof r.thumbnailDataUrl == "string" ? r.thumbnailDataUrl : null,
    waitForNavigation: typeof r.waitForNavigation == "boolean" ? r.waitForNavigation : !1
  } : r) : t;
  return {
    ...e,
    schemaVersion: "0.1.1",
    url: typeof e.url == "string" ? e.url : "",
    steps: n
  };
}
function Lr(e) {
  return { ...e, schemaVersion: Hr };
}
function ls(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ht = "mn-player";
function us(e) {
  return /^[A-Za-z0-9_-]+$/.test(e) ? e : null;
}
function q0(e) {
  let t = `${e.id};${e.stepIndex};${e.paused ? 1 : 0}`;
  return (e.pos != null || e.orient === "v") && (t += `;${e.orient === "v" ? "v" : "h"}`), e.pos != null && (t += `;${Math.round(e.pos.left)},${Math.round(e.pos.top)}`), t;
}
function F0(e) {
  if (!e) return null;
  const t = /^([^;]+);(\d+);([01])(?:;([hv]))?(?:;(-?\d+),(-?\d+))?$/.exec(e);
  if (!t || !t[1] || !t[2] || !t[3]) return null;
  const n = us(t[1]);
  if (!n) return null;
  const r = { id: n, stepIndex: Number(t[2]), paused: t[3] === "1" };
  return t[4] && (r.orient = t[4] === "v" ? "v" : "h"), t[5] && t[6] && (r.pos = { left: Number(t[5]), top: Number(t[6]) }), r;
}
function z0(e) {
  return F0(new URLSearchParams(e).get(Ht));
}
function H0(e, t) {
  const n = new URL(e);
  return n.searchParams.set(Ht, q0(t)), n.href;
}
function W0(e = window) {
  const t = new URL(e.location.href);
  t.searchParams.has(Ht) && (t.searchParams.delete(Ht), e.history.replaceState(null, "", t.pathname + t.search + t.hash));
}
function U0(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e.steps) {
    const o = r.pickedAtUrl;
    if (o)
      try {
        const s = new URL(o).origin;
        s !== t && n.add(s);
      } catch {
      }
  }
  return [...n];
}
function j0(e) {
  return {
    async tryHandoff({ targetUrl: t, scenarioId: n, stepIndex: r, paused: o }) {
      let s;
      try {
        s = new URL(t).origin;
      } catch {
        return !1;
      }
      if (s === e.currentOrigin())
        return e.persistState({ scenarioId: n, stepIndex: r, paused: o }), e.navigate(t), !0;
      if (!us(n)) return !1;
      if (await e.presence.get(s) === "present") {
        const a = e.readControls ? await e.readControls() : { orient: "h", pos: null };
        e.navigate(
          H0(t, {
            id: n,
            stepIndex: r,
            paused: o,
            orient: a.orient,
            pos: a.pos
          })
        );
      } else
        e.degrade();
      return !0;
    }
  };
}
function V0(e) {
  window.location.href = e;
}
function G0() {
  const e = document.createElement("div");
  e.setAttribute("data-manuscript", "ui"), e.style.cssText = `position:fixed;right:16px;bottom:16px;z-index:${te + 2};`;
  const t = e.attachShadow({ mode: "open" });
  t.innerHTML = `<div style="font:13px/1.4 -apple-system,system-ui,sans-serif;background:#1a2438;color:#fff;padding:10px 14px;border-radius:10px;box-shadow:0 8px 24px rgb(0 0 0 / 0.2);max-width:280px;">${A("player.handoff.unavailable")}</div>`, document.documentElement.appendChild(e), setTimeout(() => e.remove(), 6e3);
}
const ds = (e) => `mn:player:scenario:${e}`, be = "mn:player:state", Fe = "mn:player:armed";
let ps = "/", hs = () => {
};
const Tr = /* @__PURE__ */ new Set();
function Cr(e) {
  if (!e) return null;
  try {
    return new URL(e).origin;
  } catch {
    return null;
  }
}
function Y0(e) {
  var t;
  if (!Tr.has(e.id))
    for (let n = 0; n < e.steps.length - 1; n++) {
      const r = e.steps[n];
      if (!(r != null && r.waitForNavigation)) continue;
      const o = Cr(r.pickedAtUrl), s = Cr((t = e.steps[n + 1]) == null ? void 0 : t.pickedAtUrl);
      if (o && s && o !== s) {
        Tr.add(e.id), console.warn(
          `[manuscript-player] Step ${n + 1} "${r.name}" uses waitForNavigation, but the next step is on a different origin (${o} → ${s}). The player can't attach its resume state to a site-driven cross-origin navigation, so the tour won't resume there. Model cross-origin hops as a player-driven step instead. See player.html#player-crossorigin`
        );
        return;
      }
    }
}
const Oe = {};
let Pr = !1;
async function fs() {
  Pr || (Pr = !0, typeof Oe.enabled == "boolean" && await Jo(Oe.enabled), Oe.voice && await c0(Oe.voice)), await o0();
}
function X0(e) {
  e.scenarioUrlBase && (ps = e.scenarioUrlBase), e.prefetch && (hs = e.prefetch), typeof e.tts == "boolean" && (Oe.enabled = e.tts), e.ttsVoice && (Oe.voice = e.ttsVoice);
}
function K0(e) {
  if (e == null)
    throw new Error("scenario is required");
  if (typeof e == "string") {
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      throw new Error("Invalid JSON");
    }
    return Er(t, { strict: !0 });
  }
  return Er(e, { strict: !0 });
}
async function Zn(e) {
  const t = K0(e);
  Y0(t), hs(U0(t, location.origin)), localStorage.setItem(ds(t.id), JSON.stringify(t)), Uh(t);
}
async function Z0(e) {
  await fs();
  const t = (e == null ? void 0 : e.startIndex) ?? 0, n = (e == null ? void 0 : e.paused) ?? !1;
  Uo() || Wo();
  const r = D();
  if (!r)
    throw new Error("no scenario loaded");
  const o = {
    scenarioId: r.id,
    stepIndex: t,
    paused: n,
    startedAt: Date.now()
  };
  sessionStorage.setItem(be, JSON.stringify(o)), sessionStorage.removeItem(Fe), await Kn(t, { paused: n, standalone: !0 });
}
function J0() {
  lt() && On();
}
async function Q0() {
  lt() && await Ft();
}
async function eb() {
  lt() && await In();
}
async function tb(e) {
  lt() && await cs(e);
}
async function nb() {
  lt() && await zt(), sessionStorage.removeItem(be), sessionStorage.removeItem(Fe);
}
function rb(e) {
  return Kr(({ prev: n, next: r }) => {
    n === "replay" && r === "idle" && e();
  });
}
function ob() {
  var e;
  try {
    const n = (e = performance.getEntriesByType("navigation")[0]) == null ? void 0 : e.type;
    return n === "reload" || n === "back_forward";
  } catch {
    return !1;
  }
}
async function ms() {
  if (ob()) {
    sessionStorage.removeItem(be), sessionStorage.removeItem(Fe);
    return;
  }
  if (sessionStorage.getItem(Fe) !== "1") return;
  sessionStorage.removeItem(Fe);
  const e = sessionStorage.getItem(be);
  if (!e)
    return;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return;
  }
  if (!t || typeof t != "object" || typeof t.scenarioId != "string" || typeof t.stepIndex != "number")
    return;
  const n = t.scenarioId, r = t.stepIndex, o = t.paused === !0, s = localStorage.getItem(ds(n));
  if (!s) {
    sessionStorage.removeItem(be);
    return;
  }
  try {
    const i = JSON.parse(s);
    await Zn(i);
    const a = D();
    if (!a || r < 0 || r >= a.steps.length) {
      sessionStorage.removeItem(be);
      return;
    }
    await Kn(r, { paused: o, standalone: !0 });
  } catch {
    sessionStorage.removeItem(be);
  }
}
async function sb() {
  try {
    await fs();
    const e = z0(location.search);
    if (e) {
      W0(), e.orient && await W().set(
        U.replayControlsOrientation,
        e.orient === "v" ? "vertical" : "horizontal"
      ), e.pos && await W().set(U.replayControlsPosition, e.pos);
      try {
        const n = await (await fetch(`${ps}${e.id}.json`)).json();
        await Zn(n);
        const r = D();
        if (!r || e.stepIndex < 0 || e.stepIndex >= r.steps.length) return;
        Uo() || Wo(), await Kn(e.stepIndex, { paused: e.paused, standalone: !0 });
        return;
      } catch {
      }
    }
    await ms();
  } catch {
  }
}
const ab = {
  load: Zn,
  play: Z0,
  pause: J0,
  next: Q0,
  prev: eb,
  jump: tb,
  exit: nb,
  onExit: rb,
  resumeIfActive: ms,
  bootResume: sb
}, ib = 1;
function cb(e) {
  return typeof e == "object" && e !== null && e.source === "manuscript:player" && e.kind === "present";
}
function lb(e, t) {
  return new Promise((n) => {
    let r = !1, o = () => {
    }, s;
    const i = (a) => {
      r || (r = !0, clearTimeout(s), o(), n(a));
    };
    o = t.mountProbe(e, () => {
      Promise.resolve().then(() => i("present"));
    }), s = setTimeout(() => i("absent"), t.timeoutMs);
  });
}
function ub(e, t) {
  const n = document.createElement("iframe");
  n.setAttribute("aria-hidden", "true"), n.style.cssText = "position:fixed;width:0;height:0;border:0;left:-9999px;top:-9999px;";
  const r = (o) => {
    o.origin === e && o.source === n.contentWindow && cb(o.data) && t();
  };
  return window.addEventListener("message", r), document.documentElement.appendChild(n), n.src = e + "/", () => {
    window.removeEventListener("message", r), n.remove();
  };
}
function db(e) {
  const t = /* @__PURE__ */ new Map(), n = (r) => {
    let o = t.get(r);
    return o || (o = lb(r, e), t.set(r, o)), o;
  };
  return {
    prefetch: (r) => r.forEach(n),
    get: n
  };
}
function pb(e) {
  const t = e.win ?? window;
  if (t === t.top) return !1;
  const n = {
    source: "manuscript:player",
    kind: "present",
    version: e.version ?? ib
  }, r = e.allowedParentOrigins && e.allowedParentOrigins.length ? e.allowedParentOrigins : ["*"];
  for (const o of r) t.parent.postMessage(n, o);
  return !0;
}
const Re = (typeof window < "u" ? window.__MANUSCRIPT_PLAYER__ : void 0) || {};
Is({ assetBaseUrl: Re.assetBaseUrl });
Nh();
const hb = pb({
  allowedParentOrigins: Re.allowedParentOrigins
});
if (!hb) {
  const e = db({
    mountProbe: ub,
    timeoutMs: Re.beaconTimeoutMs ?? 1500
  });
  qr({
    handoff: j0({
      presence: e,
      navigate: V0,
      degrade: G0,
      currentOrigin: () => location.origin,
      persistState: (t) => {
        We().setActiveReplay({ ...t, startedAt: Date.now() }), sessionStorage.setItem(Fe, "1");
      },
      // Carry the pill's orientation + dragged position across a cross-origin
      // hop so B doesn't reset it (extension does this for free via global
      // chrome.storage; the player's per-origin sessionStorage can't).
      readControls: async () => ({
        orient: await Vo() === "vertical" ? "v" : "h",
        pos: await Go()
      })
    })
  }), X0({
    scenarioUrlBase: Re.scenarioUrlBase,
    // player.ts's load() already extracts foreign origins and passes the
    // origins array here (see Task 5); just forward to the presence cache.
    prefetch: (t) => e.prefetch(t),
    tts: Re.tts,
    ttsVoice: Re.ttsVoice
  });
  try {
    ab.bootResume().catch(() => {
    });
  } catch {
  }
}
export {
  Lm as M,
  te as O,
  Tm as V,
  mb as a,
  Pt as b,
  it as d,
  st as e,
  pe as g,
  Ue as m,
  ot as o,
  ab as p,
  A as t,
  fb as u
};
