# from base.testing import KlaytnBaseTesting


# class TestTraceCall(KlaytnBaseTesting):

#     def setUp(self) -> None:
#         super().setUp()
#         self.tracerCallObject = {"to":"0x46eda75e7ca73cb1c2f83c3927211655420dbc44","data":"0x3fb5c1cb00000000000000000000000000000000000000000000000000000000000003e7"}
#         self.blockNumber = "latest"
#         self.traceObject = {"tracer":"revertTracer"}

#     def test_post(self):
#         self.response = self.w3.debug.trace_call(
#             self.tracerCallObject,
#             self.blockNumber,
#             self.traceObject
#         )
#         self.assertIsInstance(self.response["gas"], int)

#     def test_post_wrong_with_lack_paramaters(self):
#         with self.assertRaises(ValueError):
#             self.response = self.w3.debug.trace_call()

