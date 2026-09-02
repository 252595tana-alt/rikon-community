"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Check, LockKeyhole, X } from "lucide-react";

export function JoinDialog({ roomTitle }: { roomTitle: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className="button button--coral room-join-button" type="button" onClick={() => dialogRef.current?.showModal()}>
        この部屋に参加する <ArrowRight aria-hidden="true" />
      </button>
      <dialog
        className="join-dialog"
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="join-dialog__content">
          <form method="dialog"><button className="dialog-close" aria-label="閉じる"><X aria-hidden="true" /></button></form>
          <span className="join-dialog__icon"><LockKeyhole aria-hidden="true" /></span>
          <p className="eyebrow"><span /> MEMBER ONLY</p>
          <h2>{roomTitle}に参加</h2>
          <p>安心できる場を守るため、参加には匿名アカウントと利用ルールへの同意が必要です。</p>
          <ul>
            <li><Check aria-hidden="true" /> 公開名に本名を使わない</li>
            <li><Check aria-hidden="true" /> 個人の連絡先を書かない</li>
            <li><Check aria-hidden="true" /> 相手の選択を決めつけない</li>
          </ul>
          <Link className="button button--dark" href="/login">ログイン・新規登録へ <ArrowRight aria-hidden="true" /></Link>
          <small>認証機能は現在、公開準備中です。</small>
        </div>
      </dialog>
    </>
  );
}
