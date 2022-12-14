// Generated from Move.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MoveLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly Alphanumeric = 85;
	public static readonly Digit = 86;
	public static readonly Identifier = 87;
	public static readonly NumericalAddress = 88;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", 
		"T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64", 
		"T__65", "T__66", "T__67", "T__68", "T__69", "T__70", "T__71", "T__72", 
		"T__73", "T__74", "T__75", "T__76", "T__77", "T__78", "T__79", "T__80", 
		"T__81", "T__82", "T__83", "Alphanumeric", "Digit", "Identifier", "NumericalAddress",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'spec'", "'module'", "'::'", "'{'", "'}'", "'use'", "';'", 
		"','", "'as'", "'script'", "'friend'", "'native'", "'public'", "'('", 
		"')'", "'='", "'#'", "'['", "']'", "'<'", "'>'", "'&'", "'&mut'", "'|'", 
		"'copy'", "'drop'", "'store'", "'key'", "':'", "'+'", "'phantom'", "'fun'", 
		"'acquires'", "'let'", "'break'", "'continue'", "'vector'", "'if'", "'else'", 
		"'while'", "'loop'", "'return'", "'abort'", "'==>'", "'||'", "'&&'", "'=='", 
		"'!='", "'<='", "'>='", "'..'", "'^'", "'<<'", "'>>'", "'-'", "'*'", "'/'", 
		"'%'", "'!'", "'move'", "'.'", "'forall'", "'exists'", "'where'", "'choose'", 
		"'min'", "'in'", "'u8'", "'u64'", "'u128'", "'b\"'", "'x\"'", "'\"'", 
		"'@'", "'true'", "'false'", "'const'", "'struct'", "'has'", "'/\"'", "'\"/'", 
		"'//'", "'///'", "'address'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "Alphanumeric", "Digit", "Identifier", "NumericalAddress",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MoveLexer._LITERAL_NAMES, MoveLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MoveLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MoveLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Move.g4"; }

	// @Override
	public get ruleNames(): string[] { return MoveLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MoveLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MoveLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MoveLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02Z\u021A\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03!" +
		"\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03" +
		"\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03" +
		"*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x03" +
		"0\x030\x031\x031\x031\x032\x032\x032\x033\x033\x033\x034\x034\x034\x03" +
		"5\x035\x036\x036\x036\x037\x037\x037\x038\x038\x039\x039\x03:\x03:\x03" +
		";\x03;\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03" +
		"D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03" +
		"G\x03H\x03H\x03H\x03I\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x03" +
		"L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03" +
		"R\x03R\x03R\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03V\x03V\x03W\x03W\x03X\x06X\u020E\nX\rX\x0EX\u020F" +
		"\x03Y\x03Y\x03Y\x03Y\x07Y\u0216\nY\fY\x0EY\u0219\vY\x02\x02\x02Z\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10" +
		"\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02" +
		"\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02" +
		" ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+" +
		"U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x02" +
		"7m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02" +
		"B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02" +
		"J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02Q\xA1\x02" +
		"R\xA3\x02S\xA5\x02T\xA7\x02U\xA9\x02V\xAB\x02W\xAD\x02X\xAF\x02Y\xB1\x02" +
		"Z\x03\x02\x05\x05\x022;C\\c|\x03\x022;\x05\x02C\\aac|\x02\u021B\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
		"/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
		"\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02" +
		"\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03" +
		"\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02" +
		"\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02" +
		"Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02" +
		"\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02" +
		"\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03" +
		"\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02" +
		"\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02" +
		"s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02" +
		"\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02" +
		"\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02" +
		"\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02" +
		"\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02" +
		"\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02" +
		"\x02\x02\x99\x03\x02\x02\x02\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02" +
		"\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02" +
		"\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02" +
		"\x02\x02\xAB\x03\x02\x02\x02\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02" +
		"\x02\x02\xB1\x03\x02\x02\x02\x03\xB3\x03\x02\x02\x02\x05\xB8\x03\x02\x02" +
		"\x02\x07\xBF\x03\x02\x02\x02\t\xC2\x03\x02\x02\x02\v\xC4\x03\x02\x02\x02" +
		"\r\xC6\x03\x02\x02\x02\x0F\xCA\x03\x02\x02\x02\x11\xCC\x03\x02\x02\x02" +
		"\x13\xCE\x03\x02\x02\x02\x15\xD1\x03\x02\x02\x02\x17\xD8\x03\x02\x02\x02" +
		"\x19\xDF\x03\x02\x02\x02\x1B\xE6\x03\x02\x02\x02\x1D\xED\x03\x02\x02\x02" +
		"\x1F\xEF\x03\x02\x02\x02!\xF1\x03\x02\x02\x02#\xF3\x03\x02\x02\x02%\xF5" +
		"\x03\x02\x02\x02\'\xF7\x03\x02\x02\x02)\xF9\x03\x02\x02\x02+\xFB\x03\x02" +
		"\x02\x02-\xFD\x03\x02\x02\x02/\xFF\x03\x02\x02\x021\u0104\x03\x02\x02" +
		"\x023\u0106\x03\x02\x02\x025\u010B\x03\x02\x02\x027\u0110\x03\x02\x02" +
		"\x029\u0116\x03\x02\x02\x02;\u011A\x03\x02\x02\x02=\u011C\x03\x02\x02" +
		"\x02?\u011E\x03\x02\x02\x02A\u0126\x03\x02\x02\x02C\u012A\x03\x02\x02" +
		"\x02E\u0133\x03\x02\x02\x02G\u0137\x03\x02\x02\x02I\u013D\x03\x02\x02" +
		"\x02K\u0146\x03\x02\x02\x02M\u014D\x03\x02\x02\x02O\u0150\x03\x02\x02" +
		"\x02Q\u0155\x03\x02\x02\x02S\u015B\x03\x02\x02\x02U\u0160\x03\x02\x02" +
		"\x02W\u0167\x03\x02\x02\x02Y\u016D\x03\x02\x02\x02[\u0171\x03\x02\x02" +
		"\x02]\u0174\x03\x02\x02\x02_\u0177\x03\x02\x02\x02a\u017A\x03\x02\x02" +
		"\x02c\u017D\x03\x02\x02\x02e\u0180\x03\x02\x02\x02g\u0183\x03\x02\x02" +
		"\x02i\u0186\x03\x02\x02\x02k\u0188\x03\x02\x02\x02m\u018B\x03\x02\x02" +
		"\x02o\u018E\x03\x02\x02\x02q\u0190\x03\x02\x02\x02s\u0192\x03\x02\x02" +
		"\x02u\u0194\x03\x02\x02\x02w\u0196\x03\x02\x02\x02y\u0198\x03\x02\x02" +
		"\x02{\u019D\x03\x02\x02\x02}\u019F\x03\x02\x02\x02\x7F\u01A6\x03\x02\x02" +
		"\x02\x81\u01AD\x03\x02\x02\x02\x83\u01B3\x03\x02\x02\x02\x85\u01BA\x03" +
		"\x02\x02\x02\x87\u01BE\x03\x02\x02\x02\x89\u01C1\x03\x02\x02\x02\x8B\u01C4" +
		"\x03\x02\x02\x02\x8D\u01C8\x03\x02\x02\x02\x8F\u01CD\x03\x02\x02\x02\x91" +
		"\u01D0\x03\x02\x02\x02\x93\u01D3\x03\x02\x02\x02\x95\u01D5\x03\x02\x02" +
		"\x02\x97\u01D7\x03\x02\x02\x02\x99\u01DC\x03\x02\x02\x02\x9B\u01E2\x03" +
		"\x02\x02\x02\x9D\u01E8\x03\x02\x02\x02\x9F\u01EF\x03\x02\x02\x02\xA1\u01F3" +
		"\x03\x02\x02\x02\xA3\u01F6\x03\x02\x02\x02\xA5\u01F9\x03\x02\x02\x02\xA7" +
		"\u01FC\x03\x02\x02\x02\xA9\u0200\x03\x02\x02\x02\xAB\u0208\x03\x02\x02" +
		"\x02\xAD\u020A\x03\x02\x02\x02\xAF\u020D\x03\x02\x02\x02\xB1\u0211\x03" +
		"\x02\x02\x02\xB3\xB4\x07u\x02\x02\xB4\xB5\x07r\x02\x02\xB5\xB6\x07g\x02" +
		"\x02\xB6\xB7\x07e\x02\x02\xB7\x04\x03\x02\x02\x02\xB8\xB9\x07o\x02\x02" +
		"\xB9\xBA\x07q\x02\x02\xBA\xBB\x07f\x02\x02\xBB\xBC\x07w\x02\x02\xBC\xBD" +
		"\x07n\x02\x02\xBD\xBE\x07g\x02\x02\xBE\x06\x03\x02\x02\x02\xBF\xC0\x07" +
		"<\x02\x02\xC0\xC1\x07<\x02\x02\xC1\b\x03\x02\x02\x02\xC2\xC3\x07}\x02" +
		"\x02\xC3\n\x03\x02\x02\x02\xC4\xC5\x07\x7F\x02\x02\xC5\f\x03\x02\x02\x02" +
		"\xC6\xC7\x07w\x02\x02\xC7\xC8\x07u\x02\x02\xC8\xC9\x07g\x02\x02\xC9\x0E" +
		"\x03\x02\x02\x02\xCA\xCB\x07=\x02\x02\xCB\x10\x03\x02\x02\x02\xCC\xCD" +
		"\x07.\x02\x02\xCD\x12\x03\x02\x02\x02\xCE\xCF\x07c\x02\x02\xCF\xD0\x07" +
		"u\x02\x02\xD0\x14\x03\x02\x02\x02\xD1\xD2\x07u\x02\x02\xD2\xD3\x07e\x02" +
		"\x02\xD3\xD4\x07t\x02\x02\xD4\xD5\x07k\x02\x02\xD5\xD6\x07r\x02\x02\xD6" +
		"\xD7\x07v\x02\x02\xD7\x16\x03\x02\x02\x02\xD8\xD9\x07h\x02\x02\xD9\xDA" +
		"\x07t\x02\x02\xDA\xDB\x07k\x02\x02\xDB\xDC\x07g\x02\x02\xDC\xDD\x07p\x02" +
		"\x02\xDD\xDE\x07f\x02\x02\xDE\x18\x03\x02\x02\x02\xDF\xE0\x07p\x02\x02" +
		"\xE0\xE1\x07c\x02\x02\xE1\xE2\x07v\x02\x02\xE2\xE3\x07k\x02\x02\xE3\xE4" +
		"\x07x\x02\x02\xE4\xE5\x07g\x02\x02\xE5\x1A\x03\x02\x02\x02\xE6\xE7\x07" +
		"r\x02\x02\xE7\xE8\x07w\x02\x02\xE8\xE9\x07d\x02\x02\xE9\xEA\x07n\x02\x02" +
		"\xEA\xEB\x07k\x02\x02\xEB\xEC\x07e\x02\x02\xEC\x1C\x03\x02\x02\x02\xED" +
		"\xEE\x07*\x02\x02\xEE\x1E\x03\x02\x02\x02\xEF\xF0\x07+\x02\x02\xF0 \x03" +
		"\x02\x02\x02\xF1\xF2\x07?\x02\x02\xF2\"\x03\x02\x02\x02\xF3\xF4\x07%\x02" +
		"\x02\xF4$\x03\x02\x02\x02\xF5\xF6\x07]\x02\x02\xF6&\x03\x02\x02\x02\xF7" +
		"\xF8\x07_\x02\x02\xF8(\x03\x02\x02\x02\xF9\xFA\x07>\x02\x02\xFA*\x03\x02" +
		"\x02\x02\xFB\xFC\x07@\x02\x02\xFC,\x03\x02\x02\x02\xFD\xFE\x07(\x02\x02" +
		"\xFE.\x03\x02\x02\x02\xFF\u0100\x07(\x02\x02\u0100\u0101\x07o\x02\x02" +
		"\u0101\u0102\x07w\x02\x02\u0102\u0103\x07v\x02\x02\u01030\x03\x02\x02" +
		"\x02\u0104\u0105\x07~\x02\x02\u01052\x03\x02\x02\x02\u0106\u0107\x07e" +
		"\x02\x02\u0107\u0108\x07q\x02\x02\u0108\u0109\x07r\x02\x02\u0109\u010A" +
		"\x07{\x02\x02\u010A4\x03\x02\x02\x02\u010B\u010C\x07f\x02\x02\u010C\u010D" +
		"\x07t\x02\x02\u010D\u010E\x07q\x02\x02\u010E\u010F\x07r\x02\x02\u010F" +
		"6\x03\x02\x02\x02\u0110\u0111\x07u\x02\x02\u0111\u0112\x07v\x02\x02\u0112" +
		"\u0113\x07q\x02\x02\u0113\u0114\x07t\x02\x02\u0114\u0115\x07g\x02\x02" +
		"\u01158\x03\x02\x02\x02\u0116\u0117\x07m\x02\x02\u0117\u0118\x07g\x02" +
		"\x02\u0118\u0119\x07{\x02\x02\u0119:\x03\x02\x02\x02\u011A\u011B\x07<" +
		"\x02\x02\u011B<\x03\x02\x02\x02\u011C\u011D\x07-\x02\x02\u011D>\x03\x02" +
		"\x02\x02\u011E\u011F\x07r\x02\x02\u011F\u0120\x07j\x02\x02\u0120\u0121" +
		"\x07c\x02\x02\u0121\u0122\x07p\x02\x02\u0122\u0123\x07v\x02\x02\u0123" +
		"\u0124\x07q\x02\x02\u0124\u0125\x07o\x02\x02\u0125@\x03\x02\x02\x02\u0126" +
		"\u0127\x07h\x02\x02\u0127\u0128\x07w\x02\x02\u0128\u0129\x07p\x02\x02" +
		"\u0129B\x03\x02\x02\x02\u012A\u012B\x07c\x02\x02\u012B\u012C\x07e\x02" +
		"\x02\u012C\u012D\x07s\x02\x02\u012D\u012E\x07w\x02\x02\u012E\u012F\x07" +
		"k\x02\x02\u012F\u0130\x07t\x02\x02\u0130\u0131\x07g\x02\x02\u0131\u0132" +
		"\x07u\x02\x02\u0132D\x03\x02\x02\x02\u0133\u0134\x07n\x02\x02\u0134\u0135" +
		"\x07g\x02\x02\u0135\u0136\x07v\x02\x02\u0136F\x03\x02\x02\x02\u0137\u0138" +
		"\x07d\x02\x02\u0138\u0139\x07t\x02\x02\u0139\u013A\x07g\x02\x02\u013A" +
		"\u013B\x07c\x02\x02\u013B\u013C\x07m\x02\x02\u013CH\x03\x02\x02\x02\u013D" +
		"\u013E\x07e\x02\x02\u013E\u013F\x07q\x02\x02\u013F\u0140\x07p\x02\x02" +
		"\u0140\u0141\x07v\x02\x02\u0141\u0142\x07k\x02\x02\u0142\u0143\x07p\x02" +
		"\x02\u0143\u0144\x07w\x02\x02\u0144\u0145\x07g\x02\x02\u0145J\x03\x02" +
		"\x02\x02\u0146\u0147\x07x\x02\x02\u0147\u0148\x07g\x02\x02\u0148\u0149" +
		"\x07e\x02\x02\u0149\u014A\x07v\x02\x02\u014A\u014B\x07q\x02\x02\u014B" +
		"\u014C\x07t\x02\x02\u014CL\x03\x02\x02\x02\u014D\u014E\x07k\x02\x02\u014E" +
		"\u014F\x07h\x02\x02\u014FN\x03\x02\x02\x02\u0150\u0151\x07g\x02\x02\u0151" +
		"\u0152\x07n\x02\x02\u0152\u0153\x07u\x02\x02\u0153\u0154\x07g\x02\x02" +
		"\u0154P\x03\x02\x02\x02\u0155\u0156\x07y\x02\x02\u0156\u0157\x07j\x02" +
		"\x02\u0157\u0158\x07k\x02\x02\u0158\u0159\x07n\x02\x02\u0159\u015A\x07" +
		"g\x02\x02\u015AR\x03\x02\x02\x02\u015B\u015C\x07n\x02\x02\u015C\u015D" +
		"\x07q\x02\x02\u015D\u015E\x07q\x02\x02\u015E\u015F\x07r\x02\x02\u015F" +
		"T\x03\x02\x02\x02\u0160\u0161\x07t\x02\x02\u0161\u0162\x07g\x02\x02\u0162" +
		"\u0163\x07v\x02\x02\u0163\u0164\x07w\x02\x02\u0164\u0165\x07t\x02\x02" +
		"\u0165\u0166\x07p\x02\x02\u0166V\x03\x02\x02\x02\u0167\u0168\x07c\x02" +
		"\x02\u0168\u0169\x07d\x02\x02\u0169\u016A\x07q\x02\x02\u016A\u016B\x07" +
		"t\x02\x02\u016B\u016C\x07v\x02\x02\u016CX\x03\x02\x02\x02\u016D\u016E" +
		"\x07?\x02\x02\u016E\u016F\x07?\x02\x02\u016F\u0170\x07@\x02\x02\u0170" +
		"Z\x03\x02\x02\x02\u0171\u0172\x07~\x02\x02\u0172\u0173\x07~\x02\x02\u0173" +
		"\\\x03\x02\x02\x02\u0174\u0175\x07(\x02\x02\u0175\u0176\x07(\x02\x02\u0176" +
		"^\x03\x02\x02\x02\u0177\u0178\x07?\x02\x02\u0178\u0179\x07?\x02\x02\u0179" +
		"`\x03\x02\x02\x02\u017A\u017B\x07#\x02\x02\u017B\u017C\x07?\x02\x02\u017C" +
		"b\x03\x02\x02\x02\u017D\u017E\x07>\x02\x02\u017E\u017F\x07?\x02\x02\u017F" +
		"d\x03\x02\x02\x02\u0180\u0181\x07@\x02\x02\u0181\u0182\x07?\x02\x02\u0182" +
		"f\x03\x02\x02\x02\u0183\u0184\x070\x02\x02\u0184\u0185\x070\x02\x02\u0185" +
		"h\x03\x02\x02\x02\u0186\u0187\x07`\x02\x02\u0187j\x03\x02\x02\x02\u0188" +
		"\u0189\x07>\x02\x02\u0189\u018A\x07>\x02\x02\u018Al\x03\x02\x02\x02\u018B" +
		"\u018C\x07@\x02\x02\u018C\u018D\x07@\x02\x02\u018Dn\x03\x02\x02\x02\u018E" +
		"\u018F\x07/\x02\x02\u018Fp\x03\x02\x02\x02\u0190\u0191\x07,\x02\x02\u0191" +
		"r\x03\x02\x02\x02\u0192\u0193\x071\x02\x02\u0193t\x03\x02\x02\x02\u0194" +
		"\u0195\x07\'\x02\x02\u0195v\x03\x02\x02\x02\u0196\u0197\x07#\x02\x02\u0197" +
		"x\x03\x02\x02\x02\u0198\u0199\x07o\x02\x02\u0199\u019A\x07q\x02\x02\u019A" +
		"\u019B\x07x\x02\x02\u019B\u019C\x07g\x02\x02\u019Cz\x03\x02\x02\x02\u019D" +
		"\u019E\x070\x02\x02\u019E|\x03\x02\x02\x02\u019F\u01A0\x07h\x02\x02\u01A0" +
		"\u01A1\x07q\x02\x02\u01A1\u01A2\x07t\x02\x02\u01A2\u01A3\x07c\x02\x02" +
		"\u01A3\u01A4\x07n\x02\x02\u01A4\u01A5\x07n\x02\x02\u01A5~\x03\x02\x02" +
		"\x02\u01A6\u01A7\x07g\x02\x02\u01A7\u01A8\x07z\x02\x02\u01A8\u01A9\x07" +
		"k\x02\x02\u01A9\u01AA\x07u\x02\x02\u01AA\u01AB\x07v\x02\x02\u01AB\u01AC" +
		"\x07u\x02\x02\u01AC\x80\x03\x02\x02\x02\u01AD\u01AE\x07y\x02\x02\u01AE" +
		"\u01AF\x07j\x02\x02\u01AF\u01B0\x07g\x02\x02\u01B0\u01B1\x07t\x02\x02" +
		"\u01B1\u01B2\x07g\x02\x02\u01B2\x82\x03\x02\x02\x02\u01B3\u01B4\x07e\x02" +
		"\x02\u01B4\u01B5\x07j\x02\x02\u01B5\u01B6\x07q\x02\x02\u01B6\u01B7\x07" +
		"q\x02\x02\u01B7\u01B8\x07u\x02\x02\u01B8\u01B9\x07g\x02\x02\u01B9\x84" +
		"\x03\x02\x02\x02\u01BA\u01BB\x07o\x02\x02\u01BB\u01BC\x07k\x02\x02\u01BC" +
		"\u01BD\x07p\x02\x02\u01BD\x86\x03\x02\x02\x02\u01BE\u01BF\x07k\x02\x02" +
		"\u01BF\u01C0\x07p\x02\x02\u01C0\x88\x03\x02\x02\x02\u01C1\u01C2\x07w\x02" +
		"\x02\u01C2\u01C3\x07:\x02\x02\u01C3\x8A\x03\x02\x02\x02\u01C4\u01C5\x07" +
		"w\x02\x02\u01C5\u01C6\x078\x02\x02\u01C6\u01C7\x076\x02\x02\u01C7\x8C" +
		"\x03\x02\x02\x02\u01C8\u01C9\x07w\x02\x02\u01C9\u01CA\x073\x02\x02\u01CA" +
		"\u01CB\x074\x02\x02\u01CB\u01CC\x07:\x02\x02\u01CC\x8E\x03\x02\x02\x02" +
		"\u01CD\u01CE\x07d\x02\x02\u01CE\u01CF\x07$\x02\x02\u01CF\x90\x03\x02\x02" +
		"\x02\u01D0\u01D1\x07z\x02\x02\u01D1\u01D2\x07$\x02\x02\u01D2\x92\x03\x02" +
		"\x02\x02\u01D3\u01D4\x07$\x02\x02\u01D4\x94\x03\x02\x02\x02\u01D5\u01D6" +
		"\x07B\x02\x02\u01D6\x96\x03\x02\x02\x02\u01D7\u01D8\x07v\x02\x02\u01D8" +
		"\u01D9\x07t\x02\x02\u01D9\u01DA\x07w\x02\x02\u01DA\u01DB\x07g\x02\x02" +
		"\u01DB\x98\x03\x02\x02\x02\u01DC\u01DD\x07h\x02\x02\u01DD\u01DE\x07c\x02" +
		"\x02\u01DE\u01DF\x07n\x02\x02\u01DF\u01E0\x07u\x02\x02\u01E0\u01E1\x07" +
		"g\x02\x02\u01E1\x9A\x03\x02\x02\x02\u01E2\u01E3\x07e\x02\x02\u01E3\u01E4" +
		"\x07q\x02\x02\u01E4\u01E5\x07p\x02\x02\u01E5\u01E6\x07u\x02\x02\u01E6" +
		"\u01E7\x07v\x02\x02\u01E7\x9C\x03\x02\x02\x02\u01E8\u01E9\x07u\x02\x02" +
		"\u01E9\u01EA\x07v\x02\x02\u01EA\u01EB\x07t\x02\x02\u01EB\u01EC\x07w\x02" +
		"\x02\u01EC\u01ED\x07e\x02\x02\u01ED\u01EE\x07v\x02\x02\u01EE\x9E\x03\x02" +
		"\x02\x02\u01EF\u01F0\x07j\x02\x02\u01F0\u01F1\x07c\x02\x02\u01F1\u01F2" +
		"\x07u\x02\x02\u01F2\xA0\x03\x02\x02\x02\u01F3\u01F4\x071\x02\x02\u01F4" +
		"\u01F5\x07$\x02\x02\u01F5\xA2\x03\x02\x02\x02\u01F6\u01F7\x07$\x02\x02" +
		"\u01F7\u01F8\x071\x02\x02\u01F8\xA4\x03\x02\x02\x02\u01F9\u01FA\x071\x02" +
		"\x02\u01FA\u01FB\x071\x02\x02\u01FB\xA6\x03\x02\x02\x02\u01FC\u01FD\x07" +
		"1\x02\x02\u01FD\u01FE\x071\x02\x02\u01FE\u01FF\x071\x02\x02\u01FF\xA8" +
		"\x03\x02\x02\x02\u0200\u0201\x07c\x02\x02\u0201\u0202\x07f\x02\x02\u0202" +
		"\u0203\x07f\x02\x02\u0203\u0204\x07t\x02\x02\u0204\u0205\x07g\x02\x02" +
		"\u0205\u0206\x07u\x02\x02\u0206\u0207\x07u\x02\x02\u0207\xAA\x03\x02\x02" +
		"\x02\u0208\u0209\t\x02\x02\x02\u0209\xAC\x03\x02\x02\x02\u020A\u020B\t" +
		"\x03\x02\x02\u020B\xAE\x03\x02\x02\x02\u020C\u020E\t\x04\x02\x02\u020D" +
		"\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u020D\x03\x02" +
		"\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\xB0\x03\x02\x02\x02\u0211\u0212" +
		"\x072\x02\x02\u0212\u0213\x07z\x02\x02\u0213\u0217\x03\x02\x02\x02\u0214" +
		"\u0216\t\x02\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02" +
		"\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\xB2" +
		"\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\x05\x02\u020F\u0217\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoveLexer.__ATN) {
			MoveLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MoveLexer._serializedATN));
		}

		return MoveLexer.__ATN;
	}

}

