from base.testing import KlaytnBaseTesting


class TestDebugFreeOSMemory(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.free_os_memory()
        self.assertResponseSuccess()
